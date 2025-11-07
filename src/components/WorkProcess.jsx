import pen from "../assets/pen.png";
import graph from "../assets/graph.png";
import laptop from "../assets/laptop.png";
import note from "../assets/note.png";

function WorkProcess() {
  return (
    <div className="work-process-border">
      <div className="work-process-component">
        <div className="work-process-component-1">
          <div className="work-process-component-1-title">Work Process</div>
          <div className="work-process-component-1-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci.
              Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
        </div>
        <div className="work-process-component-2">
          <div className="work-process-step">
            <img src={note} alt="Research" />
            <div className="details">
              <h1>1. Research</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
          <div className="work-process-step">
            <img src={graph} alt="Analysis" />
            <div className="details">
              <h1>2. Analysis</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
          <div className="work-process-step">
            <img src={pen} alt="Design" />
            <div className="details">
              <h1>3. Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
          <div className="work-process-step">
            <img src={laptop} alt="Launch" />
            <div className="details">
              <h1>4. Launch</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
