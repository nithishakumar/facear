import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <img src={logo} alt="Company Logo" class="footer-logo"/>
          <span class="h4">FaceAR</span>
          <div class="footer-links mt-3">
            <a href="#">Home</a>
            <a href="#">GTM Plan</a>
            <a href="#">DevBlog</a>
            <a href="#">Contact</a>
          </div>
          <p class="mt-3">&copy; {new Date().getFullYear()} FaceAR. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;