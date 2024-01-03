import React from 'react';
import TextBox from '../components/TextBox'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';
import Quote from '../components/Quote';

function GTMPlan({ title }) {

  return (
    <>
      <Spacer color='bg-img grey' />
      <div id='title'>
        <Quote text={'GTM Plan'}/>
      </div>
      <div id='textBox'>
        <TextBox title={`Phase 1: Refinement`} desc={[
            "Beta test at Michigan Medicine & nearby hospitals for ~3 months, alter app’s features accordingly, create pricing plan, & create marketing materials from user feedback."
          ]}
          image=""
          button_text=""
          youtubeEmbedCode=""
          color="bg-img grey"
        />
        <TextBox title={`Phase 2: Sales`} desc={[
            "Sell FaceAR to hospitals & other healthcare providers in the US - whose patients would be able to use the app for free."
          ]}
          image=""
          button_text=""
          youtubeEmbedCode=""
          color="bg-img grey"
        />
        <TextBox title={`Phase 3: Expansion`} desc={[
            "Partner with medical software distributors like Epic and/or societies like Facial Therapy Specialists International."
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