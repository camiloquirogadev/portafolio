import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importar Router y Routes
import Header from './components/Header';
import ModernAbout from './components/ModernAbout';
import Services from './components/Services';
import Contact from './components/Contact'; // Importar Contact
import Footer from './components/Footer';
import './App.css'; // Estilos

function App() {
  return (
    <Router basename="/portafolio">
      <div className="App">
        <Header />
       <ModernAbout />
       <Services />
       <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
