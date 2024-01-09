import './About.css';
import { Container, Card, Button } from 'react-bootstrap';
import youtubeVideo from './img/youtubeVideo.png';
import skilledProfessionals from './img/skilledProfessionals.png';


function Problems() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 inner-card-bg h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <div className="card-text card-text-color fs-5 inner-card-text-color">
                  Performing exercises through video or written instructions can be improved as it lacks interactivity & customized feedback.
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
                  Shortage of skilled professionals in facial paralysis makes info about how to perform right exercises less accessible + costly.
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
  
  function About() {
    return (
      <Container className='px-4'> 
        <Container className="d-flex align-items-center justify-content-center about-banner">
          <h1 className="text-center font-weight-bold">
            <b>FaceAR is a mobile AR app <span className='gradient-text'>with potential to revolutionize </span> 
            the facial rehabilitation space.</b>
          </h1>
        </Container>
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
        </Card>
      </Container>
    );
  }
  
  export default About;