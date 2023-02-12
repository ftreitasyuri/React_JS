import { useState } from 'react';
import './App.css';
import Saudacao from './componentes/Saudacao';
import SeuNome from './componentes/SeuNome';

function App() {

  const [nome, setNome] = useState()

  return (
    <div>

      <h1>Exemplo de como usar o State Lift</h1>
      <SeuNome setNome={setNome}/>
      
      <Saudacao nome={nome}/>

      
    </div>
  );
}

export default App;
