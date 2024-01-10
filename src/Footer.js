import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  /*Scrolls to the top of the page*/
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll behavior
    });
  };

  return (
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <Container>
              <Row>
                <Col><img src={logo} alt="Company Logo" class="footer-logo"/><h4>FaceAR</h4></Col>
                <Col><Link to='/' className='contact-color'  onClick={scrollToTop}>Home</Link></Col>
                <Col><Link to="/about" className='contact-color' onClick={scrollToTop}>About</Link></Col>
                <Col><Link to='/gtm-plan' className='contact-color'  onClick={scrollToTop}>GTM Plan</Link></Col>
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