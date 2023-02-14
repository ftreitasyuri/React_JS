import './Container.css'
import './HojeAmanha.css'
// import Amanha from '../Amanha';
import { useState } from 'react';


function Container({ setNome, nome, GrauMax, mili, GrauMin, chuva, descri, previCidade, diaAtual }) {

    function enviandoCidade(e) {




        return (

            e.preventDefault(),
            console.log(`Essa é a cidade ${nome}`)


        )

    }

 
    const [pesquisaPrevisao, setPesquisaPrevisao] = useState()

    // const lat = 33.44
    // const lon = -94.04

    // 
    // função para efetuar a pesquisa na API

    

    const fazendoPesquisa = () => {        
    //    fetch(`http://api.weatherapi.com/v1/current.json?key=fc9df67e3f6b4fadb8a153948230202&q=${nome}&lang=pt`)
       fetch(`http://api.weatherapi.com/v1/forecast.json?key=fc9df67e3f6b4fadb8a153948230202&q=${nome}&lang=pt&days=2`)
            .then((response) => {
                console.log('response', response)

                if (response.status === 200) {
                    return response.json()
                }

            })
            .then((data) => {
                console.log('Data', data)
                setPesquisaPrevisao(data)

            })
    }


    //    let GrauMax = '00'
    

    return (

        // grid inicio
        <div className='Container'>

            <div id='cabecalho'>
                <img src="https://github.com/climatempo/challenge-accepted/blob/master/images/logo-white.png?raw=true" alt="" />
            </div>


            <div id='pesquisa'>

                <form onSubmit={enviandoCidade}>
                    <div id='busca'>
                        <input type="text" placeholder='Osasco'
                            onChange={(e) => setNome(e.target.value)}


                        />


                    </div>

                    <div id='clicar'>
                        <button onClick={fazendoPesquisa} type='submit' id='botao'><i className="bi bi-search"></i></button>
                    </div>
                </form>

            </div>



            <div id='textoDinamico'>
                <div>
                    <h3>Previsão para: <></>
                        {
                            pesquisaPrevisao ? (
                                // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                                // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                                previCidade = pesquisaPrevisao.location.name

                            ) : (
                                previCidade = 'Cidade consultada'
                            )


                        } </h3>
                </div>
            </div>


            {/* <main className='ContainerII'> */}

            {/* <div id='hoje'> */}



            <section id='tudoInclu'>
                <div id='dataDescri'>
                    <h5>Hoje: <></>{
                        pesquisaPrevisao ? (
                            // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                            // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                            diaAtual = pesquisaPrevisao.location.localtime

                        ) : (
                            diaAtual = '--/--/----'
                        )


                    }</h5>
                    <p>{
                        pesquisaPrevisao ? (
                            // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                            // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                            descri = pesquisaPrevisao.current.condition.text

                        ) : (
                            descri = 'Descrição'
                        )


                    }</p>
                </div>



                <section className='tudoJunto'>
                    
                    <div className='ladoEsquerdo generico'>
                        <div id='setaCima'>
                            <p><i className="bi bi-arrow-up"></i></p>
                        </div>

                        <div id='grausC'>
                            <p id='azul'>
                                {
                                    pesquisaPrevisao ? (
                                        // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                                        // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]


                                       
                                        GrauMax = pesquisaPrevisao.forecast.forecastday[0].day.maxtemp_c

                                    ) : (
                                        GrauMax = '00'
                                    )


                                }

                                °C</p>
                        </div>
                    </div>

                    <div className='ladoDireito generico'>
                        <div id='setaBaixo'>
                            <p><i className="bi bi-arrow-down"></i></p>
                        </div>
                        <div>
                            <p id='vermelho'>
                                {
                                    pesquisaPrevisao ? (
                                        // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                                        // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                                        GrauMin = pesquisaPrevisao.forecast.forecastday[0].day.mintemp_c

                                    ) : (
                                        GrauMin = '00'
                                    )


                                }

                                °C</p>
                        </div>
                    </div>


                    
                </section>

                <section className='tudoJunto'>


                <div className='ladoEsquerdoII generico'>
                        <div>
                            <p><i className="bi bi-droplet-fill"></i></p>
                        </div>

                        <div>
                            <p>
                                {
                                    pesquisaPrevisao ? (
                                        // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                                        // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                                        mili = pesquisaPrevisao.forecast.forecastday[0].day.totalprecip_mm

                                    ) : (
                                        mili = '00'
                                    )


                                }

                                mm</p>
                        </div>
                    </div>


                    

                    <div className='ladoDireitoII generico'>
                        <div>
                            <p><i className="bi bi-umbrella-fill"></i></p>
                        </div>

                        <div>
                            <p>
                                {
                                    pesquisaPrevisao ? (
                                        // <Previs aoUm grausMax={MaxGrau} grausMin={MinGrau} />

                                        // MaxGrau = [{pesquisaPrevisao.current.feelslike_c}]



                                        chuva = pesquisaPrevisao.forecast.forecastday[0].day.daily_chance_of_rain


                                    ) : (
                                        chuva = '00'
                                    )


                                }

                                %</p>
                        </div>
                    </div>
                </section>


                

            </section>


            
            


        </div>

    )
}

export default Container