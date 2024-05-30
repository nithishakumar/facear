import './Demo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from 'react';
import { bootstrapCameraKit, createMediaStreamSource, Transform2D } from "@snap/camera-kit";


async function renderAR() {
  // Bootstrap the CameraKit Web SDK: Download WebAssembly runtime and configure SDK
  const apiToken = "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE1NjQwNjk0LCJzdWIiOiI5YmFmZmI5Ni01ZDNlLTQ2MzUtYmIwNC00ZGFhYzNiZmQ0YTh-U1RBR0lOR345ZjJkN2Q5Ni00OTdkLTQ1YjYtODcxYy1mZDg4MzcxYjRmNTYifQ.k-Rl8uGTuACnIfjZrjMi4OSC26OStxBF6wjipB_hDYI";
  const cameraKit = await bootstrapCameraKit({ apiToken });

  // Let CameraKit create a new canvas, then append it to the DOM
  const canvasContainer = document.getElementById("canvas-container");

  // Create a CameraKitSession to render lenses
  const session = await cameraKit.createSession();
  canvasContainer.appendChild(session.output.live);

  // Give CameraKit SDK access to the user's webcam
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const source = createMediaStreamSource(stream, { transform: Transform2D.MirrorX, cameraType: 'front' });
  await session.setSource(source);
  await source.setRenderSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
 
  // Loading a single lens and apply it to the session
  var lensID = "ed7e4ee8-bc4f-4860-8cbc-ea290651e867";
  var lensGroupID = "1002ed8b-a97a-42f0-842f-21b57f4a8a42";

  var tempLensId = "0e0463a1-11bc-403b-96ea-27f9dac90730";
  const lens = await cameraKit.lensRepository.loadLens(lensID, lensGroupID);
  await session.applyLens(
    lens,
    { launchParams: { text: "Some Text that we will use with a Lens" } }
);

  await session.play();
}

function Demo() {
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
    </Container>
      );
}

export default Demo;