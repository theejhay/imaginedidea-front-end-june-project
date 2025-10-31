import React from "react";
import ProfileImage from "../assets/images/ProfileImage.jpg";
import SocialMedia1 from "../assets/images/SocialMedia1.png";
import SocialMedia2 from "../assets/images/SocialMedia2.png";
import SocialMedia3 from "../assets/images/SocialMedia3.png";
import SocialMedia4 from "../assets/images/SocialMedia4.png";
import SocialMedia5 from "../assets/images/SocialMedia5.png";
import "./Usercard.css";

const Usercard = () => {
  return (
    <div className="user-card-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={ProfileImage} alt="User" className="profile-img" />

        <div className="social-media-card">
          <img src={SocialMedia4} alt="Facebook" />
          <img src={SocialMedia3} alt="Dribbble" />
          <img src={SocialMedia2} alt="Instagram" />
          <img src={SocialMedia1} alt="LinkedIn" className="linkedin-icon" />
          <img src={SocialMedia5} alt="Behance" />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <p className="user-description">
          I design and develop services for customers specializing in creating
          stylish, modern websites, web services, and online stores. My passion
          is to design digital user experiences.
        </p>

        <p className="user-short">
          I design and develop services for customers specializing in creating
          stylish, modern websites, web services.
        </p>
        <div className="button-group">
          <a href="#projects" className="btn btn-project">
            My Project
          </a>
          <a href="/cv.pdf" className="btn btn-download">
            <i className="bi bi-download me-2"></i>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
