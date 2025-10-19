import React from 'react';
import './Usercard.css';

const UserCard = () => {
  return (
    <div className="user-card-container">
      <div className="row align-items-center">
        {/* Profile Section */}
        <div className="col-md-5 text-center">
          <img
            src="/path-to-profile.jpg"
            alt="User"
            className="profile-img"
          />
          <div className="icon-row mt-4">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
            <img src="/icons/instagram.png" alt="Instagram" />
            <img src="/icons/facebook.png" alt="Facebook" />
            <img src="/icons/behance.png" alt="Behance" />
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-7">
          <h2 className="user-title">I design and develop services for customers</h2>
          <p className="user-description">
            Specializing in creating stylish, modern websites, web services, and online stores.
            My passion is to design digital user experiences.
          </p>
          <p className="user-description">
            Specializing in creating stylish, modern websites, web services, and online stores.
            My passion is to design digital user experiences.
          </p>
          <div className="button-group mt-4">
            <a href="#projects" className="btn btn-purple me-3">My Project</a>
            <a href="/cv.pdf" className="btn btn-pink">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;