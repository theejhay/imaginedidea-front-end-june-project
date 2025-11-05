import "./ProjectIdea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ProjectIdea() {
  return (
    <div className="project-idea-container col-12 col-sm-6 col-md-4 mb-4">
      <h2 className="heading">
        Do you have Project Idia? Let's discuss your project!
      </h2>

      <p className="sub-heading">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="project-idea-btn">
        <button className="btn btn-primary">
          Let’s work Together <FontAwesomeIcon icon={faArrowRight} />
        </button>{" "}
      </div>
    </div>
  );
}

export default ProjectIdea;
