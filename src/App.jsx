import { createRoot } from "react-dom/client";  
import App from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';
import WorkProcess from "./components/WorkProcess";
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <WorkProcess />
      <ContactForm />
    </>
    
  );
}

export default App;
