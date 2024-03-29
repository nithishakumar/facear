import './App.css';
import FaceARNavbar from './FaceARNavbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js'
import GTMPlan from './GTMPlan';
import Footer from './Footer.js';
import About from './About.js';

function App() {
  return (
    <div className="App">
      <Router>
      <FaceARNavbar/>
      <div className='p-4 mb-4'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gtm-plan" element={<GTMPlan />} />
      </Routes>
      <div className='p-4 mb-4'></div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
