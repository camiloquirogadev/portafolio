// App.js
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';  // Importar Contact
import Footer from './components/Footer';
import './App.css'; // Estilos
import Services from './components/Services';
import ModernAbout from './components/ModernAbout';


function App() {
  return (
    <div className="App" basename="/portafolio">
      <Header />  
      <ModernAbout />
      <Services />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
