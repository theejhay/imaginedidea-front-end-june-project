import ProjectCard from "./ProjectCard";
import "./PortfolioSection.css";
import img1 from "../assets/images/portfolio/unsplash-1.png";
import img2 from "../assets/images/portfolio/unsplash-2.png";
import img3 from "../assets/images/portfolio/laptop.jpg";
import img4 from "../assets/images/portfolio/board-room.jpg";
import img5 from "../assets/images/portfolio/avocado.jpg";
import img6 from "../assets/images/portfolio/lavender.jpg";

const projects = [
  {
    image: img1,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: img2,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: img3,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: img4,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: img5,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: img6,
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },
];

function PortfolioSection() {
  return (
    <>
      <div className="portfolio-container">
        <div className="frame-286">
          <h2 className="title"> Portfolio </h2>
          <p className="sub-heading">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <div className="row">
          {projects.map((project, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                <ProjectCard
                  image={project.image}
                  subTitle={project.subTitle}
                  title={project.title}
                  description={project.description}
                  caseStudy={project.caseStudy}
                />
              </div>
            );
          })}
        </div>

        <div className="more-project">
          <button className="more-project-btn"> More Project</button>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
