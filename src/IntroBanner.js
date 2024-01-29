import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import useCase1 from './img/useCase1.png';
import Snap from './img/Snap.png'
import MichiganMedicine from './img/MichiganMedicine.png'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IntroBanner.css';

function IntroBanner() {
    return (
      <div>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col className="col-md-auto col-lg-4">
            <h1 className='text-center text-lg-start'><b>Augmented Reality for <span className='gradient-text'>Facial Rehabilitation.</span></b></h1>
          </Col>
          <Col className="col-auto">
            <Image className='pt-2' src={useCase1} width="468" height="658" fluid />
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row>
          <Col md={6} className="mb-4">
            <div className="card container-bg">
              <div className="card-body">
                <div className="text-center card-title card-title-color fs-4">Funded by</div>
                <Link to="https://ar.snap.com/" target="_blank" rel="noopener noreferrer"><Image src={Snap} width="468" height="658" fluid /></Link>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="card container-bg">
              <div className="card-body">
                <div className="text-center card-title card-title-color fs-4">Clinical Support from</div>
                <Link to="https://www.michiganmedicine.org/" target="_blank" rel="noopener noreferrer"><Image src={MichiganMedicine} width="468" height="658" fluid /></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
  
  export default IntroBanner;