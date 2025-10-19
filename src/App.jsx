import React from 'react';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import ContactForm from './Components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <>
      <Background>
        <Navbar />
      </Background>
      <Hero/>
      <ContactForm />
    </>
   
  );
}

export default App;
