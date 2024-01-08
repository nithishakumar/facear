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
                <div class="card-title card-title-color fs-4">Real-time AR Feedback</div>
                <div class="card-text card-text-color fs-5">
                  View quantitative real-time AR muscle feedback on users’ faces through engaging games with different difficulty levels.
                </div>
                <img src={realTimeARFeedback} class="card-img-top mt-2" alt="Real-time AR Feedback" />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 card-background-color h-100">
              <div class="card-body d-flex flex-column">
                <div class="card-title card-title-color fs-4">Progress Tracking</div>
                <div class="card-text card-text-color fs-5">
                  Track progress toward recovery & effectiveness of exercises through scores in games and images of your face structure.
                </div>
                <img src={progressTracking} class="card-img-top mt-2" alt="Progress Tracking" />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 card-background-color h-100">
              <div class="card-body d-flex flex-column">
                <div class="card-title card-title-color fs-4">Expert-Guided Recovery</div>
                <div class="card-text card-text-color fs-5">
                  Access accurate facial exercises gathered from several professionals & share performance data with your healthcare provider.
                </div>
                <img src={expertGuidedRecovery} class="card-img-top mt-2" alt="Expert-Guided Recovery" />
              </div>
            </div>
          </div>
        </div>
       </div>
    );
  }
  
  export default Features;