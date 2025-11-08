import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import PortfolioSection from "./components/PortfolioSection";
import WhatIDo from "./components/WhatIDo";
import HappyClient from "./components/HappyClient";
import Testimonial from "./components/Testimonial";
import ProjectIdeas from "./components/ProjectIdeas";
import Hero from "./components/Hero";

function App() {
  return (
    <>
  
      <ContactForm />
      <ProjectIdeas/>
      <HappyClient />
      <Testimonial />
      <PortfolioSection />
      <Blog />
      <Hero />
      <WhatIDo /> 
    </>
  );
}

export default App;