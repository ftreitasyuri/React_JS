import './HojeAmanha.css'

function HojeAmanha() {
    return (

        <main className='ContainerII'>
            {/* <div id='hoje'> */}

            <div id='dataDescri'>
                <h5>01/01/2023</h5>
                <p>Descrição</p>
            </div>



            <div className='ladoEsquerdo'>
                <div id='setaCima'>
                    <p><i class="bi bi-arrow-up"></i></p>
                </div>

                <div id='grausC'>
                    <p>20°C</p>
                </div>
            </div>


            <div className='ladoEsquerdo'>
                <div>
                    <p><i class="bi bi-droplet-fill"></i></p>
                </div>

                <div>
                    <p>10mm</p>
                </div>
            </div>



            <div className='ladoDireito'>
                <p><i class="bi bi-arrow-down"></i></p>

                <div>
                    <p>15°C</p>
                </div>
            </div>

            <div className='ladoDireito'>
                <div>
                    <p><i class="bi bi-umbrella-fill"></i></p>
                </div>

                <div>
                    <p>70%</p>
                </div>
            </div>








            {/* </div> */}

        </main>

    )
}

export default HojeAmanha