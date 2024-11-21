// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';  // Importar Contact
import Footer from './components/Footer';
import './App.css'; // Estilos
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Header />  
      <About />
      <Services />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
