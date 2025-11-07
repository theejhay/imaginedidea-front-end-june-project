import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import ProjectIdea from "./components/ProjectIdea";
import PortfolioSection from "./components/PortfolioSection";
import WhatIDo from "./components/WhatIDo";
import HappyClient from "./components/HappyClient";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
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