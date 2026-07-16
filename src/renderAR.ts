import { bootstrapCameraKit, createMediaStreamSource, estimateLensPerformance, Transform2D } from "@snap/camera-kit";
import {
  Injectable,
  RemoteApiService,
  RemoteApiServices,
  remoteApiServicesFactory,
} from '@snap/camera-kit';

export async function renderAR(
  setLensData: (value: object) => void, 
  lensID: string,
  dataHandlers: { setDifficulty: (value: string) => void }
){

  type UIData = {
    elementName: string;
    value: string;
    pressed: boolean;
  };

  // Queue to hold batched settings from confirm button
  let settingsQueue: UIData[] = [];

    const remoteApiService: RemoteApiService = {
      //Sensitivity apiSpecId
      //apiSpecId: '266d9e05-8d86-4975-9729-6313b25651bd',
      //FaceAR_Data apiSpecId
      apiSpecId: 'a4033f5b-b300-417e-9aa2-10a107dacd19',
      getRequestHandler(request, lens) {
        if (request.endpointId === 'sendData'){
          console.log(request.parameters);
          setLensData(request.parameters);

          const params = request.parameters;
          if (params) {
            // Handle sensitivity updates
            // if ('sensitivity' in params && typeof params.sensitivity === 'string') {
            //   dataHandlers.setDifficulty(params.sensitivity);
            // }
            return;
          }
        }
        if (request.endpointId !== 'basic') return;

        // Return a function that matches the RemoteApiRequestHandler type
        return (reply) => {

          const waitForInput = () => {
            return new Promise<UIData>((resolve) => {
              // Check if there are queued settings from confirm button
              if (settingsQueue.length > 0) {
                const nextSetting = settingsQueue.shift()!;
                resolve(nextSetting);
                return;
              }

              const startButton = document.getElementById('startButton');
              const difficultyInput = document.getElementById('myDifficulty') as HTMLInputElement;
              const difficultyNumberInput = document.getElementById('myDifficultyInput') as HTMLInputElement;
              const toggleLeft = document.getElementById('leftSwitch') as HTMLInputElement;
              const toggleRight = document.getElementById('rightSwitch') as HTMLInputElement;
              const prevButton = document.getElementById('prevButton');
              const nextButton = document.getElementById('nextButton');
              const numReps = document.getElementById('numReps') as HTMLInputElement;
              const numSets = document.getElementById('numSets') as HTMLInputElement;
              const confirmButton = document.getElementById('confirmButton');
              const reinitButton = document.getElementById('reinitButton');

              const handleClick = (event: Event) => {
                const buttonElement = event.target as HTMLButtonElement;
                resolve({
                  elementName: buttonElement.id,
                  value: "",
                  pressed: true,
                });
              };

              const handleConfirm = (event: Event) => {
                // Queue all settings to be sent individually
                settingsQueue.push({
                  elementName: "leftSwitch",
                  value: "",
                  pressed: toggleLeft?.checked || false,
                });
                settingsQueue.push({
                  elementName: "rightSwitch",
                  value: "",
                  pressed: toggleRight?.checked || false,
                });
                settingsQueue.push({
                  elementName: "setsAndReps",
                  value: JSON.stringify({
                    reps: numReps?.value || "5",
                    sets: numSets?.value || "3",
                  }),
                  pressed: false,
                });
                
                // Resolve with the first setting immediately
                const firstSetting = settingsQueue.shift()!;
                resolve(firstSetting);
              };

              if(startButton){
                //startButton.addEventListener('click', handleClick, { once: true });
                startButton.onclick = handleClick;
              }

              const haveControls = (difficultyInput || difficultyNumberInput) && prevButton && nextButton && confirmButton && reinitButton;
              if (haveControls) {
                // Only difficulty should work in real-time
                const bindDifficultyInput = (inputEl: HTMLInputElement | null) => {
                  if (!inputEl) return;
                  inputEl.addEventListener('input', (event) => {
                    const inputElement = event.target as HTMLInputElement;
                    resolve({
                      elementName: "sensitivity",
                      value: inputElement.value,
                      pressed: false,
                    });
                  }, { once: false });
                };

                bindDifficultyInput(difficultyInput);
                bindDifficultyInput(difficultyNumberInput);
                prevButton.onclick = handleClick;
                nextButton.onclick = handleClick;
                confirmButton.onclick = handleConfirm;
                reinitButton.onclick = handleClick;
              } else {
                return;
              }
            });
          };

         /*
          const waitForInput = () => {
            return new Promise<string>((resolve) => {
            const sensitivityInput = document.getElementById('mySensitivity');
            if (!sensitivityInput) return;
            sensitivityInput.addEventListener('input', (event) => {
              const inputElement = event.target as HTMLInputElement;
              resolve(inputElement.value);
              // prevents the promise from being resolved multiple times if the button is clicked more than once
            }, { once: true });
            });
          };
          */

          // Handle the asynchronous behavior without marking the function as async
          waitForInput().then((values) => {
            reply({
              status: 'success',
              metadata: {},
              body: new TextEncoder().encode(JSON.stringify(values)),
            });
          });
        };
      },
    };


    // Bootstrap the CameraKit Web SDK: Download WebAssembly runtime and configure SDK
    const cameraKit = await bootstrapCameraKit(
      {
        apiToken:
          "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE1NjQwNjk0LCJzdWIiOiI5YmFmZmI5Ni01ZDNlLTQ2MzUtYmIwNC00ZGFhYzNiZmQ0YTh-U1RBR0lOR345ZjJkN2Q5Ni00OTdkLTQ1YjYtODcxYy1mZDg4MzcxYjRmNTYifQ.k-Rl8uGTuACnIfjZrjMi4OSC26OStxBF6wjipB_hDYI",
      },
      (container) =>
        container.provides(
          Injectable(
            remoteApiServicesFactory.token,
            () => [remoteApiService]

          )
        )
    );

    // Let CameraKit create a new canvas, then append it to the DOM
    const canvasContainer = document.getElementById("canvas-container");
    if (!canvasContainer) return;




    // Create a CameraKitSession to render lenses
    const session = await cameraKit.createSession();
    canvasContainer.appendChild(session.output.live);

    // Give CameraKit SDK access to the user's webcam
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const source = createMediaStreamSource(stream, { transform: Transform2D.MirrorX, cameraType: 'user' });
    await session.setSource(source);
    await source.setRenderSize(window.innerWidth/1.8, window.innerHeight/1.5);

    // Loading a single lens and apply it to the session

    var lensGroupID = "1002ed8b-a97a-42f0-842f-21b57f4a8a42";
    const lens = await cameraKit.lensRepository.loadLens(lensID, lensGroupID);
    await session.applyLens(lens, { launchParams: { text: "Some Text that we will use with a Lens" }});
    await session.play();

    // Return a cleanup function
    return () => {
      session?.destroy();
      if (canvasContainer.contains(session.output.live)) {
        canvasContainer.removeChild(session.output.live);
      }
    };
  }