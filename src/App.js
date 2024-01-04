import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GTMPlan from './pages/GTMPlan'
import DevBlog from './pages/DevBlog';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  const title = "FaceAR";;

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar title={title} />
      <Routes>
        <Route path='/' exact Component={() => <Home title={title} /> }/>
        <Route path='/GTMPlan' exact Component={() => <GTMPlan title={'GTM Plan'} />} />
        <Route path='/dev-blog' exact Component={() => <DevBlog title={'DevBlog'} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
