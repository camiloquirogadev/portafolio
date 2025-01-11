import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar Router y Routes
import Header from './components/Header';
import Contact from './components/Contact'; // Importar Contact
import Footer from './components/Footer';
import './App.css'; // Estilos
import Services from './components/Services';
import ModernAbout from './components/ModernAbout';

function App() {
  return (
    <Router basename="/portafolio"> 
      <div className="App">
        <Header />  
        
        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<ModernAbout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
