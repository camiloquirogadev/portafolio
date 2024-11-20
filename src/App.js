// App.js
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';  // Importar Contact
import './App.css'; // Estilos

function App() {
  return (
    <div className="App">
      <Header />   
      <Contact /> 
    </div>
  );
}

export default App;
