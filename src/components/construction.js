import React, { useState } from 'react';
import './Construction.css'; 

const Construction = () => {
  const [texto, setTexto] = useState("UNDER CONSTRUCTION");

  const handleClick = () => {

    setTexto(texto === "UNDER CONSTRUCTION" ? "EN CONSTRUCCION" : "UNDER CONSTRUCTION");
  };

  return (
    <div className="construction-container" onClick={handleClick}>
      <span className="construction-text">{texto}</span>
    </div>
  );
};

export default Construction;
