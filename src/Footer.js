import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <footer class="footer" id="mainFooter">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="Company Logo" class="footer-logo"/>
            <span class="h4">FaceAR</span>
            </div>
            <div class="footer-links mt-3">
              <Link to='/'>Home</Link>
              <a href="#">About</a>
              <Link to='/gtm-plan'>GTM Plan</Link>
            </div>
            <div>
            <p class="mt-3">Contact: <Link className='contact-color' to='mailto:facearteam@umich.edu'>facearteam@umich.edu</Link></p>
            </div>
            <div>
              <p class="mt-3">&copy; {new Date().getFullYear()} FaceAR. All rights reserved.</p>
            </div>
        </div>
      </div>
    </div>
  </footer>   
  );
}

export default Footer;