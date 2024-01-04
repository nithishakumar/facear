import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';

function Home({ title }) {

  return (
    <>
      <div id="home">
        <Hero/>
      </div>
      <Quote 
        text="Augmented Reality for Facial Rehabilitation." 
        color="grey" 
      />
      <div id='about'>
        <Spacer color='bg-img grey' />
        <TextBox title={`Watch FaceAR in action!`} desc={[
            "FaceAR is being built by Nithisha Nantha Kumar, Melissa Fang, Anisha Nahta, and Haihan Gao with clinical support from Michigan Medicine and funding from Snap, Inc. (Snapchat).",
          ]}
          image=""
          button_text="Contact Us!"
          button_link="mailto:facearteam@umich.edu"
          youtubeEmbedCode="dZJAAmF_aQg" 
          color="center bg-img grey"
        />
        <Spacer color='bg-img grey' />
      </div>
      <Footer title={title} color="grey" />
    </>
  );

}

export default Home;