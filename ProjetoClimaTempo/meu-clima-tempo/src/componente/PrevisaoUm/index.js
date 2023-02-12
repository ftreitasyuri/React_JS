import './PrevisaoUm.css'
import '../../App.js';

function PrevisaoUm({ previCidade, grausMax, grausMin, milimetros, percent, diaAtual, descri }) {
    return (
        <div>

            <div id="ConteTi">
                <p id='primeiroP'>Previsão para {previCidade} </p>
            </div>

            <div id='containerData' className='form-control'>
                <h3>{diaAtual}</h3>

                <h5>{descri}</h5>

            </div>

            <main id="containerHoje" className="container-sm">

                {/* <div id='containerData' classNameName='form-control'>
                    <p>01/02/2027</p>

                    <p>Descrição</p>

                </div> */}

                <section id='ladoEsquerdo'>
                    <div className='Inline'>
                        <div id='seta'>
                            <i className="bi bi-arrow-up"></i>
                        </div>

                        <div id='grausC'>
                            <p id="grausMaximo">{grausMax}°C</p>
                        </div>

                    </div>

                    <div className='Inline'>
                        <div id='seta'>
                            <i className="bi bi-droplet-fill"></i>
                        </div>

                        <div id='grausC'>
                            <p>{milimetros}mm</p>
                        </div>

                    </div>
                </section>


                {/* ########################################################################### */}

                <section id='ladoDireito'>
                    <div className='Inline'>
                        <div id='seta'>
                            <i className="bi bi-arrow-down"></i>
                        </div>

                        <div id='grausC'>
                            <p id="grausMinimo">{grausMin}°C</p>
                        </div>

                    </div>




                    <div className='Inline'>
                        <div id='seta'>
                            <i className="bi bi-umbrella-fill"></i>
                        </div>

                        <div id='grausC'>
                            <p>{percent}%</p>
                        </div>

                    </div>
                </section>

            </main>
        </div>


    )
}

export default PrevisaoUm