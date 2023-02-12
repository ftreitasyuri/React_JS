
// Exemplo de como usar o onClick

function Evento(){

    function meuEvento (){
        return(
            alert('Exemplo de como usar o onClick'),
            console.log('Fui ativado')
        )
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

export default Evento