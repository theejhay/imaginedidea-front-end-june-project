import "./App.css";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import WorkProcess from "./components/WorkProcess";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <WorkProcess />
      <ContactForm />
      <Blog />
    </>
  );
}

export default App;
