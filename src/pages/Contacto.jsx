import React from 'react';

function Contacto() {
  return (
    <main className="app">
      <h1 className="app-titulo">Contacto</h1>
      <p className="resultado">
        Ponete en contacto con el equipo del proyecto:
      </p>
      <div style={{ textAlign: 'center', lineHeight: '2' }}>
        <p><strong>Email:</strong> jgb@ucasal.edu.ar</p>
        <p><strong>Materia:</strong> Lenguajes IV</p>
        <p><strong>Institución:</strong> Universidad Católica de Salta</p>
      </div>
    </main>
  );
}

export default Contacto;

