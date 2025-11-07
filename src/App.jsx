import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import WorkProcess from "./components/WorkProcess";
import WhatIDo from "./components/WhatIDo";
import "bootstrap/dist/css/bootstrap.min.css";
import HappyClient from "./Components/HappyClient";
import Testimonial from "./Components/Testimonial";

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
