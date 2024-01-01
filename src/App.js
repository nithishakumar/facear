import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GTMPlan from './pages/GTMPlan'
import DevBlog from './pages/DevBlog';
import ScrollToTop from './utils/ScrollToTop';
import './fonts/ITCAvantGardeStd-Bk.ttf'

function App() {

  const title = "FaceAR";;

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={() => <Home/> }/>
        <Route path='/GTMPlan' exact Component={() => <GTMPlan title={title} />} />
        <Route path='/dev-blog' exact Component={() => <DevBlog title={title} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
