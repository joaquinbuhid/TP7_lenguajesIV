import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Inicio from './pages/Inicio';
import ProyectoBlob from './pages/ProyectoBlob';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blob" element={<ProyectoBlob />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
