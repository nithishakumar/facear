import './Demo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { renderAR } from './renderAR';

function Demo() {
  const [sensitivity, setSensitivity] = useState("0.5");
  const [isStarted, setIsStarted] = useState(false);
  const [isLeftOn, setIsLeftOn] = useState(true);
  const [isRightOn, setIsRightOn] = useState(true);
  const [tooltipPosition, setTooltipPosition] = useState({ left: "50%" });

    useEffect(() => {
        renderAR();
    }, []); 

    const handleStart = () => {
      setIsStarted(true)
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      setSensitivity(input.value);
      // Update tooltip position based on slider's thumb
      const sliderWidth = input.offsetWidth;
      const thumbPosition = (+input.value - 0.5) * sliderWidth;
      setTooltipPosition({ left: `${thumbPosition}px` });
    };

    const handleToggleSide = (side: "left" | "right") => {
      if (side === "left") {
        if (isLeftOn) {
          setIsRightOn(true); // Ensure Right stays on when Left is turned off
        }
        setIsLeftOn(!isLeftOn);
      } else if (side === "right") {
        if (isRightOn) {
          setIsLeftOn(true); // Ensure Left stays on when Right is turned off
        }
        setIsRightOn(!isRightOn);
      }
    };

    const handlePrevious = () => {
      //TODO
    };

    const handleNext = () => {
      //TODO
    };

    return (
      <Container className="px-4">
      <Row className="justify-content-center">
        <Col className="text-center fs-1">
          <b><span className='gradient-text'>Demo</span></b>
        </Col>
      </Row>

      {!isStarted ? (
        // Before clicking the start button, show the exercise description
        <Row className="justify-content-center">
        <Col md={3} className="exercise-panel bg-gray">
          <h2 className="fs-3"><b>Sample Exercise</b></h2>
          <hr className="separator" />
          <p className="exercise-description">
              In this exercise, you will have three sample facial exercises to explore FaceAR features using your WebCam. After starting the exercise, you can adjust your sensitivity level and switch to unilateral mode in the setting panel.
          </p>
        </Col>
        
        <Col md={8} className="text-center">
          <div className = "bg-gray" id="canvas-container"></div>
          <Button
            id="startButton"
            variant="primary" 
            onClick={handleStart} 
            disabled={isStarted}
            className="start-button w-50"
          >
            Start
          </Button>
        </Col>
      </Row>
      ):(
        //After clicking the Start button, show the setting panel and change the button to "next" and "previous"
        <Row className="justify-content-center">
          <Col md={3} className="settings-panel bg-gray p-3">
            <h2 className="fs-3"><b>Settings</b></h2>
            <p className="setting-description">
              In this setting panel, you will be able to adjust the sensitivity level through the slider below and toggle the bilateral setting buttons
            </p>

            <hr className="separator" />
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: tooltipPosition.left,
                      background: "#fef500",
                      color: "#000",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    {sensitivity}
                  </div>
                </Tooltip>
              }
            >
              <Form.Range
                id="mySensitivity"
                min={0}
                max={1}
                step={0.1}
                value={sensitivity}
                onChange={handleSliderChange}
              />
            </OverlayTrigger>
            <Form.Label className="sensitivity-label">Sensitivity
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Adjusts the sensitivity of the AR lens detection.
                </Tooltip>
              }
            >
              <span className="sensitivity-infoIcon">
                &#9432; {/* Unicode for a small 'info' symbol */}
              </span>
            </OverlayTrigger>
            </Form.Label>

            <hr className="separator" />
            <Row className="mb-3">
            <Col xs={6}>
              <Form.Check 
                type="switch"
                id="leftSwitch"
                checked={isLeftOn}
                onChange={() => handleToggleSide("left")}
                className="custom-switch mt-3"
              />
              <div className="switch-label">Left</div>
            </Col>

            <Col xs={6}>
              <Form.Check 
                type="switch"
                id="rightSwitch"
                checked={isRightOn}
                onChange={() => handleToggleSide("right")}
                className="custom-switch mt-3"
              />
              <div className="switch-label">Right 
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-top">
                    Adjusts the bilateral setting of the lens
                  </Tooltip>
                }
              >
                <span className = "switch-infoIcon">
                  &#9432; {/* Unicode for a small 'info' symbol */}
                </span>
              </OverlayTrigger>
              </div>
              
            </Col>
            </Row>
          </Col>
          
          <Col md={8} className="text-center">
            <div className = "bg-gray" id="canvas-container"></div>
            <Row className="justify-content-center mt-4">
            <Col className="text-center prev-button">
              <Button id= "prevButton" variant="secondary" onClick={handlePrevious} className="mx-2">Previous</Button>
            </Col>

            <Col className="text-center" md="auto">
              <span className="exercise-name fs-4"><b>Sample Exercise</b></span>
            </Col>

            <Col className="text-center next-button">
              <Button id= "nextButton"variant="secondary" onClick={handleNext} className="mx-2">Next</Button>
            </Col>
            </Row>
          </Col>
        </Row>
      )}
      
    </Container>
      );
}

export default Demo;