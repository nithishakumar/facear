import './Demo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { bootstrapCameraKit, createMediaStreamSource, Transform2D } from "@snap/camera-kit";
import {
  Injectable,
  RemoteApiService,
  RemoteApiServices,
  remoteApiServicesFactory,
} from '@snap/camera-kit';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Demo() {
  const [sensitivity, setSensitivity] = useState("0.5");
async function renderAR() {

  const remoteApiService: RemoteApiService = {
    //Nithisha apiSpecId
    //apiSpecId: '875c6c5a-44e1-4a38-b2cd-d2e57473c4c3',
    //placeholder apiSpecId
    //apiSpecId: '363ee2a5-ad35-4a5f-9547-d42b2c60a927',
    //Button_pressed apiSpecId
    apiSpecId: '0807319b-ca6b-404a-85a4-f7783636bc0d',
    getRequestHandler(request, lens) {
      if (request.endpointId !== 'sensitivity') return;

      // Return a function that matches the RemoteApiRequestHandler type
      return (reply) => {
        const waitForInput = () => {
          return new Promise<String>((resolve) => {
            const sensitivityInput = document.getElementById('mySensitivity');
            if(!sensitivityInput) return;
            sensitivityInput.addEventListener('input', (event) => {
              const inputElement = event.target as HTMLInputElement;
              resolve(inputElement.value);
              // prevents the promise from being resolved multiple times if the button is clicked more than once
            }, { once: true });
          });
        };
  
        // Handle the asynchronous behavior without marking the function as async
        waitForInput().then((val) => {
          reply({
            status: 'success',
            metadata: {},
            body: new TextEncoder().encode(JSON.stringify(val)),
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
          [remoteApiServicesFactory.token] as const,
          (existing: RemoteApiServices) => [...existing, remoteApiService]
        )
      )
  );

  // Let CameraKit create a new canvas, then append it to the DOM
  const canvasContainer = document.getElementById("canvas-container");

  // Create a CameraKitSession to render lenses
  const session = await cameraKit.createSession();
  if(!canvasContainer) {
    return
  }
  canvasContainer.appendChild(session.output.live);

  // Give CameraKit SDK access to the user's webcam
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const source = createMediaStreamSource(stream, { transform: Transform2D.MirrorX, cameraType: 'user' });
  await session.setSource(source);
  await source.setRenderSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
 
  // Loading a single lens and apply it to the session
  var lensID = "a7947531-7f53-42f7-8448-ae26c5d4e3d5";
  var lensGroupID = "1002ed8b-a97a-42f0-842f-21b57f4a8a42";
  const lens = await cameraKit.lensRepository.loadLens(lensID, lensGroupID);
  await session.applyLens(lens, { launchParams: { text: "Some Text that we will use with a Lens" }});
  await session.play();
}
  useEffect(() => {(renderAR());}, []);

    return (
      <Container className="px-4">
      <Row className="justify-content-center">
        <Col className="text-center fs-1">
          <b><span className='gradient-text'>Demo</span></b>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <br></br>
          <div id="canvas-container"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
      <Col className="text-center">
      <Form.Label>Sensitivity {sensitivity}</Form.Label>
      <Form.Range id="mySensitivity" min={0} max={1} step={0.1} onChange={(event) => {const input = event.target as HTMLInputElement;
    // Update the state with the new slider value
    setSensitivity(input?.value);}}/>
      </Col>
      </Row>
    </Container>
      );
}

export default Demo;