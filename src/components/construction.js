import React, { useState } from 'react';
import './Construction.css'; 

const Construction = () => {
  const textos = ["under construction", "en construcción","em construção", "en cours de construction", "in costruzione", "im Aufbau"];
  const [indice, setIndice] = useState(0);

  const handleClick = () => {
    setIndice((indice + 1) % textos.length); // Cambiar al siguiente texto en el array
  };

  return (
    <div className="construction-container" onClick={handleClick}>
      <p className="construction-text">{ textos[indice] }</p>
      <p className="construction-scroll">↑↓</p>
    </div>
  );
};

export default Construction;

