import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import WorkProcess from "./components/WorkProcess";
import HappyClient from "./components/HappyClient";
import Testimonial from "./components/Testimonial";
import WhatIDo from "./components/WhatIDo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <WorkProcess />
      <ContactForm />
      <HappyClient />
      <Testimonial />
      <Blog />
      <WhatIDo /> 
    </>
  );
}

export default App;
