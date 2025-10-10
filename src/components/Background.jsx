import React from "react";
import "./Background.css";

function Background({ children }) {
  return <div className="background-container">{children}</div>;
}

export default Background;
