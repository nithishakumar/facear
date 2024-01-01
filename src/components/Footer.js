import React from 'react';
import '../App.css';
import './Footer.css';

function Footer({ color }) {

    let footer_container_classname = "footer-container "
    footer_container_classname += color

    return (
        <>
            <div className={footer_container_classname}>
              <div className='footer-contact'>
              <h1>Contact us</h1>
              </div>
              <div className='footer-contact-email'>
              <h1>facearteam@umich.edu</h1>
              </div>
              <div className='footer-logo'>
                <h1>Thanks for your interest in</h1>
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
              </div>
            </div>
        </>
    );
}

export default Footer;
