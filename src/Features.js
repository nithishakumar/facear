import realTimeARFeedback from './img/realTimeARFeedback.png';
import progressTracking from './img/progressTracking.png';
import expertGuidedRecovery from './img/expertGuidedRecovery.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';


function Features() {
    return (
      <div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card border-0 card-background-color h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title card-title-color">Real-time AR Feedback</h5>
          <div class="card-text card-text-color">
            View quantitative real-time AR muscle feedback on users’ faces through engaging games with different difficulty levels.
          </div>
          <img src={realTimeARFeedback} class="card-img-top mt-auto" alt="Image" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 card-background-color h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title card-title-color">Progress Tracking</h5>
          <div class="card-text card-text-color">
            Track progress toward recovery & effectiveness of exercises through scores in games and images of your face structure.
          </div>
          <img src={progressTracking} class="card-img-top mt-auto" alt="Image" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 card-background-color h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title card-title-color">Expert-Guided Recovery</h5>
          <div class="card-text card-text-color">
            Access accurate facial exercises gathered from several professionals & share performance data with your healthcare provider.
          </div>
          <img src={expertGuidedRecovery} class="card-img-top mt-auto" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</div>
    
    );
  }
  
  export default Features;