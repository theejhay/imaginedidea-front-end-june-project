import React from 'react';
import Usercard from './components/Usercard'; 
import './App.css';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <Hero />
      <ContactForm />
      <Usercard /> 
    </>
    
  );
}

export default App;