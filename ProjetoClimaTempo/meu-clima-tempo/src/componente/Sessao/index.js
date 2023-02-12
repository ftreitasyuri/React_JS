import './Sessao.css'

function Sessao() {
    return (
        // para informar sobre a previsão do dia atual
        <div id="container">

            <div id="EmLinha">
                {/* BLOCO 1 */}
                <div className="naReta">
                    <section id="PrimeiraSessao">
                        <div className="hoje">
                            <div className="Seta">
                                <i className="bi bi-arrow-up"></i>

                            </div>

                            <div className="GrausC">
                                <p>20°C</p>
                            </div>
                        </div>
                    </section>

                    <section id="PrimeiraSessaoII">
                        <div className="hoje">
                            <div className="GotaDagua">
                                <i className="bi bi-droplet-fill"></i>

                            </div>
                            <div className="Milimetros">
                                <p>10mm</p>
                            </div>

                        </div>
                    </section>
                </div>

                {/* BLOCO 2 */}

                <div className="naReta">
                    <section id="SegundaSessao">
                        <div className="hoje">
                            <div className="Seta">
                                <i className="bi bi-arrow-down"></i>

                            </div>

                            <div className="GrausC">
                                <p>10°C</p>
                            </div>
                        </div>
                    </section>

                    <section id="SegundaSessaoII">
                        <div className="hoje">
                            <div className="GotaDagua">
                            <i className="bi bi-umbrella-fill"></i>

                            </div>
                            <div className="Milimetros">
                                <p>7%</p>
                            </div>

                        </div>
                    </section>
                </div>

                
            </div>
        </div>
        // FIM: para informar sobre a previsão do dia atual



        


    )
}

export default Sessao