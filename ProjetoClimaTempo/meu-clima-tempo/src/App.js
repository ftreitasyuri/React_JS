import './App.css';
import PrevisaoUm from './componente/PrevisaoUm';
// import Busca from './componente/Busca';
// import Sessao from './componente/Sessao';
import { useState } from 'react';

function App() {
  // header 
  const cabeca = 'https://github.com/climatempo/challenge-accepted/blob/master/images/logo-white.png?raw=true'

  const [cidade, setCidade] = useState("")

  const recuperarInput = (e) => {
    setCidade(e.target.value)
    // console.log(cidade)
  }

  const [pesquisaPrevisao, setPesquisaPrevisao] = useState(null)

  

  const fazendoPrevisao = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=fc9df67e3f6b4fadb8a153948230202&q=${cidade}&lang=pt`
    ).then((response) => {
      // console.log('response', response);
      

      if (response.status === 200) {
        return response.json()
        
       
      }
    })
      .then((data) => {
        console.log('Data', data)
        setPesquisaPrevisao(data)
        
        // console.log(pesquisaPrevisao.current.feelslike_c);
      })

    
  }

  // variáveis dinamicas
  let MaxGrau = ('00')
  let MinGrau = ('00')
  let mili = ('00')
  let chuva = ('00')
  let diahoje = ('00/00/00')
  let descriCao = ('Cidade')

 

  return (
    <div className="App">
      <main className='container-sm'>
        <div id='logo' className='container-sm'>
          <img className='img-fluid' src={cabeca} alt="Principal" />
        </div>

        {/* <div id="busca">
            <Busca/>
        </div> */}

        <div id='InputPesquisa'>
          <div id='ChegouPesquisa'>
            <input
              onChange={recuperarInput}
              className='form-control'
              type="text"
              placeholder='Digite o nome da cidade'
              value={cidade}
            />

          </div>
          <div id='botao'>
            <button onClick={fazendoPrevisao} className="btn btn-primary"><i className="bi bi-search"></i></button>
          </div>

        </div>

        

        

        
        {
          pesquisaPrevisao ? (
            // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />
            
            // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]

            

            <PrevisaoUm
            grausMax={pesquisaPrevisao.current.temp_c}

            grausMin={pesquisaPrevisao.current.gust_mph}

            milimetros={pesquisaPrevisao.current.precip_mm}

            diaAtual={pesquisaPrevisao.location.localtime}

            descri={pesquisaPrevisao.current.condition.text}
            
            percent={pesquisaPrevisao.current.gust_kph}

            previCidade={pesquisaPrevisao.location.name}
            />
           
          ): (
            <PrevisaoUm grausMax={MaxGrau} grausMin={MinGrau} milimetros={mili} percent={chuva}
            descri={descriCao} diaAtual={diahoje}  />
          )
        }




        {/* <Sessao /> */}
        {/* <hr />
        <Sessao /> */}


      </main>

    </div>
  );
}

export default App;
