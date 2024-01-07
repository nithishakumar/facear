import './App.css';
import Container from 'react-bootstrap/Container';
import Features from './Features';

function GTMPlan() {
    return (
        <div>
        <Container>
        <div className='p-4 mb-1'></div> {/*Spacer*/}
          <div className='p-4 mb-1'>
            <Features />
          </div>
          <div className='p-4 mb-1'></div> {/*Spacer*/}
        </Container>
        </div>
      );
}

export default GTMPlan;