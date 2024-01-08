import './App.css';
import IntroBanner from './IntroBanner';
import EmbedVideo  from './EmbedVideo';
import Features from './Features';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div>
      <Container>
      <div><IntroBanner /></div>
      <div className='p-4 mb-1'><EmbedVideo youtubeEmbedCode={'dZJAAmF_aQg'} /></div>
      <div className='p-4 mb-1'><Features /></div>
      </Container>
    </div>
  );
}

export default Home;