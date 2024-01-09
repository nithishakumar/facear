import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <Container>
              <Row>
                <Col><img src={logo} alt="Company Logo" class="footer-logo"/><h4>FaceAR</h4></Col>
                <Col><Link to='/facear/#' className='contact-color'>Home</Link></Col>
                <Col><Link to="/facear/about#" className='contact-color'>About</Link></Col>
                <Col><Link to='/facear/gtm-plan#' className='contact-color'>GTM Plan</Link></Col>
              </Row>
              </Container>
              <p class="mt-3">Contact: <Link className='contact-color' to='mailto:facearteam@umich.edu'>facearteam@umich.edu</Link></p>
              <p class="mt-3">&copy; {new Date().getFullYear()} FaceAR. All rights reserved.</p>
        </div>
      </div>
      </div>
  </footer>   
  );
}

export default Footer;