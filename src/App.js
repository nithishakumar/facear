import './App.css';
import FaceARNavbar from './FaceARNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js'
import GTMPlan from './GTMPlan';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
      <FaceARNavbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/gtm-plan" element={<GTMPlan />} />
        {/* Other routes */}
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
