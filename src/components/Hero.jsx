import React from "react";
import "./Hero.css";
import profileImg from "../assets/images/profile.jpg";

const Stat = ({ value, label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="greeting">Hello, I’m</p>
          <h1 className="name">Brooklyn Gilbert</h1>

          <p className="intro">
            I'm a Freelance <strong>UI/UX Designer</strong> and{" "}
            <strong>Developer</strong> based in London, England. I strive to
            build immersive and beautiful web applications through carefully
            crafted code and user-centric design.
          </p>

          <div className="cta-row">
            <a className="cta" href="#contact" aria-label="Say hello">
              Say Hello!
            </a>
          </div>

          <div className="stats">
            <Stat value="15 Y." label="Experience" />
            <Stat value="250+" label="Projects Completed" />
            <Stat value="58" label="Happy Clients" />
          </div>
        </div>

        <div className="hero-right" aria-hidden="false">
          <div className="profile-card">
            <img
              src={profileImg}
              alt="Portrait of Brooklyn Gilbert"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
