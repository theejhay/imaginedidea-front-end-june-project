import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import WorkProcess from "./components/WorkProcess";
import ProjectIdea from "./components/ProjectIdea";
import PortfolioSection from "./components/PortfolioSection";
import WhatIDo from "./components/WhatIDo";
import "bootstrap/dist/css/bootstrap.min.css";
import HappyClient from "./components/HappyClient";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <>
      <WorkProcess />
      <ContactForm />
      <ProjectIdea/>
      <HappyClient />
      <Testimonial />
      <PortfolioSection />
      <Blog />
      <WhatIDo /> 
    </>
  );
}

export default App;