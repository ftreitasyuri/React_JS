import './App.css';
import Container from './Componentes/Container';
import { useState } from 'react';


function App() {

  const [nome, setNome] = useState()


  
  
  
  
  // variáveis dinamicas
  // let MaxGrau = ('00')


  return (
    <div className='App'>
      <Container nome={nome} setNome={setNome} />


    

      
    </div>
  )
}

export default App;
