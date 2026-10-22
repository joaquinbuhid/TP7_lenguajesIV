import React from 'react';
import ucasalLogo from '../assets/ucasal.png';

function AcercaDe() {
  return (
    <main className="app">
      <h1 className="app-titulo">Acerca de</h1>

      <div>
        <img
          src={ucasalLogo}
          alt="Logo UCASAL - Universidad Católica de Salta"
          style={{ maxWidth: '300px', width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <p className="resultado">
        Proyecto Blob, es la aplicacion que permite manejar blobs de manera sencilla y directa, con el objetivo de aprender a trabajar con este tipo de objetos en JavaScript.
      </p>

      <div style={{ maxWidth: '600px', textAlign: 'center', lineHeight: '1.8' }}>
        <p><strong>Cátedra:</strong> Lenguajes IV</p>
      </div>
    </main>
  );
}

export default AcercaDe;
