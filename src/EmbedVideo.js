import React, { useRef } from 'react';
import { Container, Row, Col, Ratio } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function EmbedVideo({ videoSrc }) {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <Container className="pt-4 pb-5" fluid>
    <Row>
      <Col>
        <Ratio aspectRatio="16x9" onClick={handleVideoClick}>
          <iframe className="embed-responsive embed-responsive-16by9" src={videoSrc} allowFullScreen />
        </Ratio>
      </Col>
    </Row>
  </Container>
  );
}

export default EmbedVideo;
