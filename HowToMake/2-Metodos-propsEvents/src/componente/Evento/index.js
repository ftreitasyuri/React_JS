import Button from "../Button"

// EVENTO

// COMPONENTE PAI
function Evento(){
    
    function meuEvento(){
        console.log('Ativando o primeiro evento')
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            {/* <button onClick={meuEvento} >Ativar!</button> */}
        </div>
    )
}

export default Evento