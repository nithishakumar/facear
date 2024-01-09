import './About.css';
import { Container, Card, Button } from 'react-bootstrap';
import Anisha from './img/Anisha.jpg';
import Nithisha from './img/Nithisha.jpg';
import Melissa from './img/Melissa.jpg';
import Haihan from './img/Haihan.jpg';
import youtubeVideo from './img/youtubeVideo.png';
import skilledProfessionals from './img/skilledProfessionals.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Problems() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 inner-card-bg h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <div className="card-text card-text-color fs-5 inner-card-text-color">
                  Performing exercises through video or written instructions can be 
                  improved as it lacks interactivity & customized feedback.
                </div>
                <div className="mt-auto">
                  <img src={youtubeVideo} className="card-img-bottom mt-2" alt="Exercise YouTube Video" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <div className="card border-0 inner-card-bg h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <div className="card-text card-text-color fs-5 inner-card-text-color">
                  Shortage of skilled professionals in facial paralysis makes info about 
                  how to perform right exercises less accessible + costly.
                </div>
                <div className="mt-auto">
                  <img src={skilledProfessionals} className="card-img-bottom mt-2" alt="Skilled Medical Professionals" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Team() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={4} className="g-4">
          <Col>
            <Card className='border-0 inner-card-bg'>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Nithisha Nantha Kumar</Card.Title>
                <img src={Nithisha} className="card-img-bottom" alt="Skilled Medical Professionals" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0 inner-card-bg'>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Melissa Fang</Card.Title>
                <img src={Melissa} className="card-img-bottom" alt="Skilled Medical Professionals" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0 inner-card-bg'>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Anisha Nahta</Card.Title>
                <img src={Anisha} className="card-img-bottom" alt="Skilled Medical Professionals" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0 inner-card-bg'>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Haihan Gao</Card.Title>
                <img src={Haihan} className="card-img-bottom" alt="Skilled Medical Professionals" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  
  function About() {
    return (
      <Container className='px-4'> 
        <Container className="d-flex align-items-center justify-content-center about-banner">
          <h1 className="text-center font-weight-bold">
            <b>FaceAR is a mobile AR app <span className='gradient-text'>with potential to revolutionize </span> 
            the facial rehabilitation space.</b>
          </h1>
        </Container>
        <Row className="justify-content-center">
            <Col className="my-4"> {/* Equal space between title and cards */}
                <Card className='outer-card-bg border-0'>
                <Card.Title className='p-3'>
                    <div className='fs-4 outer-card-text-color'>
                    Several studies show that facial muscle exercises help patients with 
                    facial weakness & paralysis, but there are issues associated with performing 
                    these exercises:
                    </div>
                </Card.Title>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Problems />
                </Card.Body>
                <Card.Title className='p-3'>
                    <div className='fs-4 outer-card-text-color'>
                FaceAR is an accessible, cost-effective, and expert-backed solution that 
                uses real-time AR feedback with engaging games to make the facial 
                rehabilitation process more interactive.
                    </div>
                </Card.Title>
                </Card>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col className="my-4"> {/* Equal space between title and cards */}
                <Card className='outer-card-bg border-0'>
                <Card.Title className='p-3'>
                    <div className='fs-4 outer-card-text-color'>
                    The FaceAR team consists of 4 University of Michigan alumni who are 
                    eager to use their XR development skills to create social impact:
                    </div>
                </Card.Title>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Team />
                </Card.Body>
                <Card.Title className='p-3'>
                    <div className='fs-4 outer-card-text-color'>
                    What started as a capstone project for a college course is now being futher 
                    developed with funding from Snap and professional clinical support from Michigan 
                    Medicine, under the supervision of Dr. Chandramouli Krishnan. The FaceAR team is 
                    iteratively improving the app by actively applying feedback on the app from facial 
                    disorder patients at Michigan Medicine.
                    </div>
                </Card.Title>
                </Card>
            </Col>
        </Row>
        
      </Container>
    );
  }
  
  export default About;