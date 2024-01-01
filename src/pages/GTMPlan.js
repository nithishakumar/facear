import React from 'react';
import TextBox from '../components/TextBox'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';

function GTMPlan({ title }) {

  return (
    <>
      <Spacer color='bg-img grey' />
      <div id='textBox'>
        <TextBox title={`What is FaceAR?`} desc={[
            "FaceAR ---rtual environment.",
            "With FaceAR, ------.",
          ]}
          image=""
          button_text=""
          youtubeEmbedCode=""
          color="bg-img grey"
        />
      </div>
      <Spacer color='bg-img grey' />
      <Footer color="grey" />
    </>
  );

}

export default GTMPlan;