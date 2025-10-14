import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
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
            <div className="work-process-component-2-1"></div>
            <div className="work-process-component-2-2"></div>
            <div className="work-process-component-2-3"></div>
            <div className="work-process-component-2-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
