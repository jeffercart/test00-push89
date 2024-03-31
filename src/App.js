import React from 'react';
import Pushi from './components/pushi'; // Importa el componente pushi.js
import Menu from './components/Menu';
import UnderDer from './components/Under-derecha';
import Construction from './components/construction'
import './App.css';


function App() {
  return (
    <div className="App">
       <Menu />
       <Pushi /> 
       <Construction />
       <UnderDer />

    </div>

  );
}

export default App;
