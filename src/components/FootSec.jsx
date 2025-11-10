import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import "./FootSec.css";

function FootSec() {
  return (
    <>
      <footer>
        <div className="container-fluid main-container ">
          <div className="row align-items-center text-center text-md-start ">
            <div className="col-md-3 mb-3 mb-md-0 d-flex ">
              <div className="footer-logo justify-content-md-start justify-content-center d-flex align-items-center">
                <div className="logo-circle">
                  <img src={logo} alt="" />
                </div>
                <span className="">Brooklyn</span>
              </div>
            </div>

            <div className="col-md-6 mb-3 mb-md-0 ">
              <nav className="footer-nav d-flex justify-content-center flex-wrap">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Process</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </nav>
            </div>

            <div className="col-md-3 text-md-end">
              <small>Copyright © 2022 Picto.</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FootSec;
