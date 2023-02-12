import './CampoTexto.css';

const CampoTexto = (props) => {
    // Variáveis
    const placeHolderModi = `${props.placeholder}...`


    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    // Fim variáveis    

    return (
        <div className="campo-texto">            
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder = {placeHolderModi}/>
        </div>         
        
    );
}

export default CampoTexto