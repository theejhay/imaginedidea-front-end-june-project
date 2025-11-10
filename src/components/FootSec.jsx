import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo_2.png";
import "./FootSec.css";

function FootSec() {
  return (
    <>
      <footer>
        <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div class="d-flex align-items-center mb-3 mb-md-0">
            <div class="logo-circle">B</div>
            <span class="fw-bold text-white fs-5">Brooklyn</span>
          </div>
          <nav class="footer-nav d-flex flex-wrap justify-content-center mb-3 mb-md-0">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Process</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          <div class="text-center text-md-end">
            <small>Copyright © 2022 Picto.</small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FootSec;
