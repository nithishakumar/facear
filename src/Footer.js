import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import messageIcon from './img/messageIcon.png';

function Footer() {
    /* Scrolls to the top of the page after a delay */
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Delay of 100 milliseconds (0.1 seconds) before scrolling to the top
    };

  return (
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <Container>
              <Row className="justify-content-center align-items-top">
                <Col xs={12} sm={3} className="text-center">
                  <img src={logo} alt="Company Logo" className="footer-logo" />
                  <h4>FaceAR</h4>
                </Col>
                <Col xs={12} sm={3} className="text-center pt-2">
                  <Link to="/" className="contact-color" onClick={scrollToTop}>Home</Link>
                </Col>
                <Col xs={12} sm={3} className="text-center pt-2">
                  <Link to="/about" className="contact-color" onClick={scrollToTop}>About</Link>
                </Col>
                <Col xs={12} sm={3} className="text-center pt-2">
                  <Link to="/gtm-plan" className="contact-color" onClick={scrollToTop}>GTM Plan</Link>
                </Col>
              </Row>
            </Container>
            <p class="mt-3"><img src={messageIcon} alt="Message Icon" className='mail-icon' width='30' height='auto' fluid /><Link className='contact-color' to='mailto:facearteam@umich.edu'>facearteam@umich.edu</Link></p>
            <p class="mt-3">&copy; {new Date().getFullYear()} FaceAR. All rights reserved.</p>
        </div>
      </div>
      </div>
  </footer>   
  );

}

export default Footer;