import React from 'react';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import ContactForm from './Components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Background>
      <Navbar />
    </Background>

    <ContactForm />


    

</>
    
  );
}

export default App;
