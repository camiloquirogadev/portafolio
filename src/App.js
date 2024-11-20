// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';  // Importar Contact
import Footer from './components/Footer';
import './App.css'; // Estilos

function App() {
  return (
    <div className="App">
      <Header />  
      <About />
      <Skills /> 
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
