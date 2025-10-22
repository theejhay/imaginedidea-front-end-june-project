import React from "react";
import profileImg from "../assets/images/profile.jpg";
import "./Hero.css";

const Stat = ({ value, label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-left">
            <p className="greeting">Hello, I’m</p>
            <h1 className="name">Brooklyn Gilbert</h1>

            <p className="intro">
              I'm a Freelance{" "}
              <span className="strike-text">UI/UX Designer</span> and{" "}
              <span className="strike-text">Developer</span> based in London,
              England. I strive to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>

            <div className="cta-row">
              <a className="cta" href="#contact" aria-label="Say hello">
                Say Hello!
              </a>
            </div>

            <div className="stats d-flex flex-wrap gap-3 mt-5">
              <Stat value="15 Y." label="Experience" />
              <Stat value="250+" label="Projects Completed" />
              <Stat value="58" label="Happy Clients" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 hero-right" aria-hidden="false">
            <img
              src={profileImg}
              alt="Portrait of Brooklyn Gilbert"
              className="profile-img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
