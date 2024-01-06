import './App.css';
import FaceARNavbar from './FaceARNavbar';
import IntroBanner from './IntroBanner';
import EmbedVideo  from './EmbedVideo';
import Features from './Features';
import { Container } from 'react-bootstrap';
import Footer from "./Footer.js";
import FaceARTrailer from "./videos/FaceARTrailer.mp4"

function App() {
  return (
    <div className="App">
      <FaceARNavbar/>
      <Container>
      <div className='p-2 mb-1'></div> {/*Spacer*/}
        <div>
          <IntroBanner />
        </div>
        <div className='p-4 mb-1'>
          <EmbedVideo videoSrc={FaceARTrailer} />
        </div>
        <div className='p-4 mb-1'>
          <Features />
        </div>
        <div className='p-4 mb-1'></div> {/*Spacer*/}
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
