import './App.css';
import FaceARNavbar from './FaceARNavbar';
import IntroBanner from './IntroBanner';
import EmbedVideo  from './EmbedVideo';
import Features from './Features';
import { Container } from 'react-bootstrap';
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <FaceARNavbar/>
      <Container>
      <div className='p-4 mb-1'></div> {/*Spacer*/}
        <div>
          <IntroBanner />
        </div>
        <div className='p-4 mb-1'>
          <EmbedVideo youtubeEmbedCode={'dZJAAmF_aQg'} />
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
