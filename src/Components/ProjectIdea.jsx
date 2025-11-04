import "./ProjectIdea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ProjectIdea() {
  return (
    <div className="project-idea-container col">
      <h2 className="heading col-sm-auto">
        Do you have Project Idia? Let's discuss your project!
      </h2>

      <p className="sub-heading col-sm-auto">
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
