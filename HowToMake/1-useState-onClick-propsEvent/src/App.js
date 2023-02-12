import './App.css';
import Pessoa from './componentes/Pessoa';


function App() {

  return ( 
    <div className="App">
      {/* usando o componente importado*/}
      <Pessoa 
        foto='https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg'
        nome='Yuri'
        idade='25'        
        profissao='        
        Me chamdo Yuri Freitas, tenho 25 anos, estudo programação web,
        trabalho como analista de suporte n1 na Totvs. Estudo para me tornar um desenvolvedor full stack.
        '
      />     
    </div>
  );
}


export default App;
