import React from 'react';
import '../App.css';
import './Hero.css';
function Hero() {

    return (
        <>
            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <video src={process.env.PUBLIC_URL + `/videos/introLetterbox.mp4`} autoPlay loop muted />
                </div>
                <div className='hero-logo'>
                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" className='titleLogo' />
                </div>
            </div>
        </>
    );
}

export default Hero;
