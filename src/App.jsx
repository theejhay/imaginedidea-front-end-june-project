import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./components/ContactForm";
import FootSec from "./components/FootSec";
import Blog from "./components/Blog";
import PortfolioSection from "./components/PortfolioSection";
import WhatIDo from "./components/WhatIDo";
import HappyClient from "./components/HappyClient";
import Testimonial from "./components/Testimonial";
import ProjectIdeas from "./components/ProjectIdeas";

function App() {
  return (
    <>
      {/* <WorkProcess />
      <ContactForm /> */}
      <FootSec />
      <ContactForm />
      <ProjectIdeas/>
      <HappyClient />
      <Testimonial />
      <PortfolioSection />
      <Blog />
      <WhatIDo /> 
    </>
  );
}

export default App;