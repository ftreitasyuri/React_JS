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
                                previCidade = pesquisaPrevisao.location.name

                            ) : (
                                previCidade = 'Cidade consultada'
                            )


                        } </h3>
                </div>
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}
            <section className='Tudo'>
                <div id='primeiro'>
                    <h3>Hoje: <bc />
                        {
                            pesquisaPrevisao ? (
                                diaAtual = pesquisaPrevisao.forecast.forecastday[0].date
                            ) :
                                diaAtual = '--/--/--'
                        }
                    </h3>
                    <p>
                        {
                            pesquisaPrevisao ? (
                                descri = pesquisaPrevisao.forecast.forecastday[0].day.condition.text
                            ) :
                                descri = 'Descrição'
                        }
                    </p>

                </div>

                {/* --------------------------------------------INICIO 1ª PARTE-------------------------------------------------- */}
                <div className='tudoInclu'>
                    <div id='parteI'>
                        <section className='BlocoLinha'>
                            <div>
                                <p><i className="bi bi-arrow-up"></i></p>
                            </div>
                            <div>
                                <p className='azul'>
                                    {
                                        pesquisaPrevisao ? (


                                            GrauMax = pesquisaPrevisao.forecast.forecastday[0].day.maxtemp_c

                                        ) : (
                                            GrauMax = '00'
                                        )


                                    }

                                    °C
                                </p>
                            </div>
                        </section>

                        <section className='BlocoLinha'>
                            <div>
                                <p><i className="bi bi-droplet-fill"></i></p>
                            </div>

                            <div>
                                <p>
                                    {
                                        pesquisaPrevisao ? (
                                            mili = pesquisaPrevisao.forecast.forecastday[0].day.totalprecip_mm

                                        ) : (
                                            mili = '00'
                                        )


                                    }mm

                                </p>
                            </div>
                        </section>

                    </div>
                    {/* ----------------------------------SEPARAÇÃO 1ª E 2ª PARTE--------------------------------- */}


                    <div id='parteII'>
                        <section className='BlocoLinha'>
                            <div>
                                <p><i className="bi bi-arrow-down"></i></p>
                            </div>
                            <div>
                            <p className='vermelho'>
                                    {
                                        pesquisaPrevisao ? (

                                            GrauMin = pesquisaPrevisao.forecast.forecastday[0].day.mintemp_c

                                        ) : (
                                            GrauMin = '00'
                                        )


                                    }
                                    C</p>
                            </div>
                        </section>

                        <section className='BlocoLinha'>
                            <div>
                                <p><i className="bi bi-umbrella-fill"></i></p>
                            </div>

                            <div>
                                <p>
                                {
                                        pesquisaPrevisao ? (

                                            chuva = pesquisaPrevisao.forecast.forecastday[0].day.mintemp_c

                                        ) : (
                                            chuva = '00'
                                        )


                                    }
                                    %</p>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
            {/* ----------------------------------FINAL DAS 1ª E 2ª PARTE--------------------------------- */}



            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------INICIO 3ª PARTE-------------------------------------------------- */}
            
            <section className='TudoII'>
                <div id='segundo'>
                    <h3>Amanhã: <bc />
                        {
                            pesquisaPrevisao ? (
                                diaAtual = pesquisaPrevisao.forecast.forecastday[1].date
                            ) :
                                diaAtual = '--/--/--'
                        }
                    </h3>
                    <p>
                        {
                            pesquisaPrevisao ? (
                                descri = pesquisaPrevisao.forecast.forecastday[1].day.condition.text
                            ) :
                                descri = 'Descrição'
                        }
                    </p>

                </div>
            
            <div className='tudoInclu'>
                <div id='parteIII'>
                    <section className='BlocoLinha'>
                        <div>
                            <p><i className="bi bi-arrow-up"></i></p>
                        </div>
                        <div>
                        <p className='azul'>
                                {
                                    pesquisaPrevisao ? (


                                        GrauMax = pesquisaPrevisao.forecast.forecastday[1].day.maxtemp_c

                                    ) : (
                                        GrauMax = '00'
                                    )


                                }

                                °C
                            </p>
                        </div>
                    </section>

                    <section className='BlocoLinha'>
                        <div>
                            <p><i className="bi bi-droplet-fill"></i></p>
                        </div>

                        <div>
                            <p>
                                {
                                    pesquisaPrevisao ? (
                                        mili = pesquisaPrevisao.forecast.forecastday[1].day.totalprecip_mm

                                    ) : (
                                        mili = '00'
                                    )


                                }mm

                            </p>
                        </div>
                    </section>

                </div>
                {/* ----------------------------------SEPARAÇÃO 3ª E 4ª PARTE--------------------------------- */}


                <div id='parteIIII'>
                    <section className='BlocoLinha'>
                        <div>
                            <p><i className="bi bi-arrow-down"></i></p>
                        </div>
                        <div>
                        <p className='vermelho'>
                                {
                                    pesquisaPrevisao ? (

                                        GrauMin = pesquisaPrevisao.forecast.forecastday[1].day.mintemp_c

                                    ) : (
                                        GrauMin = '00'
                                    )


                                }
                                C</p>
                        </div>
                    </section>

                    <section className='BlocoLinha'>
                        <div>
                            <p><i className="bi bi-umbrella-fill"></i></p>
                        </div>

                        <div>
                        <p>
                                {
                                        pesquisaPrevisao ? (

                                            chuva = pesquisaPrevisao.forecast.forecastday[1].day.mintemp_c

                                        ) : (
                                            chuva = '00'
                                        )


                                    }
                                    %</p>
                        </div>
                    </section>

                </div>
            </div>

            </section>
        
{/* ----------------------------------FINAL DAS 3ª E 4ª PARTE--------------------------------- */ }





        </div >

    )
}

export default Container