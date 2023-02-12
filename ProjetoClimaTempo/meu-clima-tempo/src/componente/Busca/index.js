// import Botao from '../Botao';
import './Busca.css';

import { useState } from 'react';

function Busca() {

    function Pesquisando(e) {
        return (
            e.preventDefault(),
            console.log('Iniciando uma consulta na api com a cidade'),
            console.log(`(${name})`)

        )

    }

    const [name, setName] = useState()

    const [PrevisaoTempo, setPrevisaoTempo] = useState(null)

    const buscandoCidade = (e) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=fc9df67e3f6b4fadb8a153948230202&q=${name}&lang=pt`)
            .then((response) => {
                if(response.status === 200){
                    return response.json()
                }
            })
            .then((data) =>{
                // console.log('data ====>', data)
                PrevisaoTempo(data)
            } )
        }


        return (
            <form id='formulario' onSubmit={Pesquisando}>
                <div id="InputButton">
                    <div id='PesquisaInput'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Osasco'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                  
                    <div>
                        <button onClick={buscandoCidade} id='botaoPesquisa'><i className="bi bi-search"></i></button>
                    </div>


                    {
                    PrevisaoTempo ? (
                        <div>
                            <div>
                                <img src={PrevisaoTempo.current.condition.icon} />
                            </div>
                        </div>
                    ) : null
                   }

                </div>
            </form>
        );



    }

export default Busca