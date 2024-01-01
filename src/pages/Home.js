import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';

function Home() {

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <Quote 
        text="Augmented Reality for Facial Rehabilitation." 
      />
      <div>
        <Spacer color='bg-img off_white' />
        <TextBox title={`Watch FaceAR in action!`} desc={[]}
          image=""
          button_text="GTM Plan"
          button_link="/GTMPlan"
          youtubeEmbedCode="dZJAAmF_aQg" 
          color="center bg-img grey"
        />
      </div>
      <Spacer color='bg-img grey' />
      <Footer color="grey" />
    </>
  );

}

export default Home;