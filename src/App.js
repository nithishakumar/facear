import './App.css';
import FaceARNavbar from './FaceARNavbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js'
import Development from './Demo.js';
import Footer from './Footer.js';
import About from './About.js';
import {remoteApiServicesFactory } from '@snap/camera-kit'

function App() {

  /*
  const facearendpoint1 = {
      apiSpecId: "b032a38e-4fb9-4719-a0b5-b31d1ce63900",
      getRequestHandler: (request, lens) => {
           // Check if the endpointId matches the expected endpoint
           if (request.endpointId === "facearendpoint1") {
              // Your custom logic to handle the request for the expected endpoint
              // This function must return a RemoteApiRequestHandler or undefined
              // Example logic:
              // Process the request and create a response
              const response = {
                status: 'success',
                metadata: { 'content-type': 'application/json' },
                body: new TextEncoder().encode(JSON.stringify({ message: "secret unlocked" }))
              };
            // Return a function that will handle the response
            return (reply) => {
              reply(response);
            };
      } else {
          // If the request is for a different endpoint, return undefined to indicate that it should not be handled
          console.log("bad request");
          return undefined;
      }
    }
  };

  const remoteApiServices = remoteApiServicesFactory();
  remoteApiServices.push(facearendpoint1);
  */

  return (
    <div className="App">
      <Router>
      <FaceARNavbar/>
      <div className='p-4 mb-4'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Development />} />
      </Routes>
      <div className='p-4 mb-4'></div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
