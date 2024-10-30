import React from 'react';
import './App.css';
import FaceARNavbar from './FaceARNavbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Development from './Demo';
import Footer from './Footer';
import About from './About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <FaceARNavbar />
        <div className='p-4 mb-4'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Development />} />
        </Routes>
        <div className='p-4 mb-4'></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
