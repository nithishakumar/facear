import React from 'react';
import './App.css';
import FaceARNavbar from './FaceARNavbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Development from './Demo';
import Footer from './Footer';
import About from './About';
import Login from './Login';
import AuthProvider from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <FaceARNavbar />
        <div className='p-4 mb-4'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/demo" element={<Development />} />
            </Route>
        </Routes>
        </AuthProvider>
        <div className='p-4 mb-4'></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
