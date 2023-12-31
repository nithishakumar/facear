import './GTMPlan.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sales from './img/Sales.jpg';
import Expansion from './img/Expansion.jpg';
import Refinement from './img/Refinement.jpg';
import { Link } from 'react-router-dom';

function GTMPlan() {
    return (
      <Container className="px-4">
      <Row className="justify-content-center">
        <Col className="text-center fs-1">
          <b><span className='gradient-text'>Go-To-Market</span> Plan</b>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="my-4"> {/* Equal space between title and cards */}
          <Card className="card-style">
            <Card.Body>
              <Card.Title className='card-title-color fs-2'>Phase 1: Refinement</Card.Title>
              <div className="mt-3">
              <Card.Text className="fs-5">
                Beta test at Michigan Medicine & nearby hospitals for ~3 months, alter app’s features accordingly, create pricing plan, & create marketing materials from user feedback.
              </Card.Text>
              </div>
            </Card.Body>
            <img src={Refinement} className="card-img-top my-auto img-fluid" alt="Refinement" />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="my-4"> {/* Equal space between cards */}
          <Card className="card-style">
            <Card.Body>
              <Card.Title className='card-title-color fs-2'>Phase 2: Sales</Card.Title>
              <div className="mt-3">
              <Card.Text className="fs-5">
                Sell FaceAR to hospitals & other healthcare providers in the US - whose patients would be able to use the app for free.
              </Card.Text>
              </div>
            </Card.Body>
            <img src={Sales} className="card-img-top my-auto img-fluid" alt="Sales" />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="my-4"> {/* Equal space between cards */}
          <Card className="card-style">
            <Card.Body>
              <Card.Title className='card-title-color fs-2'>Phase 3: Expansion</Card.Title>
              <div className="mt-3">
              <Card.Text className="fs-5">
                Partner with medical software distributors like <Link to="https://www.epic.com/about/" className='card-link-color'>Epic</Link> and/or societies like <Link to="https://facialtherapyspecialists.com/our-team/" className='card-link-color'>Facial Therapy Specialists International</Link>.
              </Card.Text>
              </div>
            </Card.Body>
            <img src={Expansion} className="card-img-top my-auto img-fluid" alt="Expansion" />
          </Card>
        </Col>
      </Row>
    </Container>
      );
}

export default GTMPlan;