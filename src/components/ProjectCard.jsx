import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ image, subTitle, title, description, caseStudy }) {
  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="container mt-8">
          <div className="card">
            <img src={image} className="card-img-top" />
            <div className="frame-56">
              <div className="card-body">
                <h6 className="sub-title"> {subTitle} </h6>
                <h5 className="card-title"> {title} </h5>

                <p className="card-text"> {description} </p>
              </div>
              <div className="case-study">
                <button className="btn btn-primary">
                  {caseStudy}
                  <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
