import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import BallIcon from "../assets/images/Ball.png";
import BeIcon from "../assets/images/Be.png";
import LinkedinIcon from "../assets/images/Linkedin.png";
import InstagramIcon from "../assets/images/Instagram.png";
import PlaneIcon from "../assets/images/Plane.png";
import AddIcon from "../assets/images/Add1.png";
import Add2 from "../assets/images/Add2.png";


const ContactForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budject: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row align-items-center gx-5 p-5 ">
        <div className="col-md-5 mb-4">
          <h2 className="fw-bold"> Let's discuss your Project</h2>
          <p className="text-muted">
            There are many variations of passgae of Lorem Ipsu available, but
            the majority have suffered alte.
          </p>

          <div className="mb-4 d-flex align-items-start info-box ">
            <div className="icon-wrapper">
              <img src={AddIcon} alt="Add1" className="purple-icon me-2" />
            </div>
            <div>
              <div className="text-muted">Address:</div>
              <strong>New Mexico 31134</strong>
            </div>
          </div>

          <div className="mb-4 d-flex align-items-center info">
            <div className="icon-wrapper">
              <img src= {Add2} alt="Add2" className="purple-icon-2 me-2" />
            </div>
            <div>
              <div className="text-muted"> My Email:</div>
              <strong>mymail@mail.com</strong>
            </div>
          </div>

          <div className="mb-5 d-flex align-items-center info">
            <div className="icon-wrapper">
              <img src= {Add2} alt="Add2" className="purple-icon-2 me-2" />
            </div>
            <div>
              <div className="text-muted"> Call Me Now:</div>
              <strong>00-1234 00000</strong>
            </div>
          </div>

          <div className="d-flex align-items-center gap-5 mt-4 fs-4">
            <FontAwesomeIcon icon={faFacebookF} className="social-Icon" />
            <img src={BallIcon} alt="Ball" />
            <img src={BeIcon} alt="Be" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={LinkedinIcon} alt="LinkedIn" />
          </div>
        </div>

        <div className="col-md-7">
          <p className="text-muted">
            There are many variations of passgae of Lorem Ipsu available, but
            the majority have suffered alte.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="form-control custom-underline"
                value={FormData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="form-control border-0 border-bottom"
                value={FormData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="location"
                placeholder="Location*"
                className="form-control border-0 border-bottom"
                value={FormData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget*"
                  className="form-control border-0 border-bottom"
                  value={FormData.budget}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  className="form-control border-0 border-bottom"
                  value={FormData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="message"
                placeholder="Message*"
                className="form-control border-0 border-bottom"
                value={FormData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-start mt-5">
              <button type="submit">
                <span className="me-2">Submit</span>{" "}
                <img src={PlaneIcon} alt="plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
