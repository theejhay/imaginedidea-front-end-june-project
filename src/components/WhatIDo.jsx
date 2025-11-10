import React from "react";
import "./WhatIDo.css";

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="wrapper-container">
        <div className="content">
          <h2> What I do?</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulia
            purus arcu, varuius eget velit non, laoreet imperdiet orci. Mauris
            ultrices eget lorem ac vestibulum. Suspends Imperdiet
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            purus arcu, varius eget velit non.
          </p>
          <button className="say-hello"> Say Hello!</button>
        </div>

        <div className="services">
          <div>
            <h3> User Experience (UX) </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              purus arcu, varius eget velit non, looret imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>

          <div>
            <h3> User Interface (UI) </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              purus arcu, varius eget velit non, looret imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>

          <div>
            <h3> Web Development </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              purus arcu, varius eget velit non, looret imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
