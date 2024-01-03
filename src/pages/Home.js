import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';
import Button from '../components/Button';

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
          button_text=""
          button_link=""
          youtubeEmbedCode="dZJAAmF_aQg" 
          color="center bg-img grey"
        />
      </div>
      <div>
        <Button
        text={'GTM Plan'}
        link={'/GTMPlan'}
        />
        <Button
        text={'Development Blog'}
        link={'/dev-blog'}
        />
      </div>
      <Spacer color='bg-img grey' />
      <Footer color="grey" />
    </>
  );

}

export default Home;