import React from 'react';
import '../App.css';
import './Footer.css';

function Footer({ title, color }) {

    let footer_container_classname = "footer-container "
    footer_container_classname += color

    return (
        <>
            <div className={footer_container_classname}>
                <div className='footer-thankyou'>
                    <h1>Thanks for your interest in</h1>
                    <div className='footer-logo'>
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
