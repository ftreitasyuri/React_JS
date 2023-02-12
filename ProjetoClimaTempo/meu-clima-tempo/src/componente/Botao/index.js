// COMPONENTE FILHO
// BUTTON
function Botao (props){
    
    return(

        <form action="">
        <div id='PesquisaInput'>
            <input type="text" placeholder='Osasco' />
        </div>

        <button onClick={props.event} id='botaoPesquisa'>{props.text}</button>
        {/* <button onClick={props.event} id='botaoPesquisa'> <i type="submit" className="bi bi-search">{props.text}</i></button> */}
    </form>


    )
    
    }
    
export default Botao