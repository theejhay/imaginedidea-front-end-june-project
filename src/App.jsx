import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import WorkProcess from "./components/WorkProcess";
import ContactForm from "./components/ContactForm";
import PortfolioSection from "./components/PortfolioSection";

import WhatIDo from "./components/WhatIDo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <WorkProcess />
      <ContactForm />
      <PortfolioSection />
      <Blog />
      <WhatIDo /> 
    </>
  );
}

export default App;
