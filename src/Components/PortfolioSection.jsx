import ProjectCard from "./ProjectCard";
import "./Portfolio.css";

const projects = [
  {
    image: "src/assets/images/portfolio/unsplash-1.png",
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: "src/assets/images/portfolio/unsplash-2.png",
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: "src/assets/images/portfolio/laptop.jpg",
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: "src/assets/images/portfolio/board-room.jpg",
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: "src/assets/images/portfolio/avocado.jpg",
    subTitle: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    caseStudy: "Case Study",
  },

  {
    image: "src/assets/images/portfolio/lavender.jpg",
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
        <div className="portfolio-and-project-card">
          <div className="frame-286">
            <h2 className="title"> Portfolio </h2>
            <p className="sub-heading">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>

          <div className="row">
            {projects.map((project, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <ProjectCard
                    key={index}
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
        </div>
        <div className="more-project">
          <button className="more-project-btn"> More Project</button>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;