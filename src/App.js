import React from 'react';
import Header from './components/Header'; // Importa correctamente Header
import About from './components/About'; // Asegúrate de tener estos componentes creados
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';// Importa el archivo de estilos



function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
