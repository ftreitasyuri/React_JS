// Exemplos de como usar o props direto na função ao invés de usar da forma (props.nome)

import Evento from '../Evento';
import Form from '../Form';
import './Pessoa.css'

function Pessoa ({foto, nome, idade, profissao}){
    return(
        <div id="pessoa">
            <img src={foto} alt={foto} />
            <p>Nome: {nome} </p>
            <p>Idade: {idade}</p>
            <p>Descrição: {profissao}</p>
            <Evento /> 
            <Form />
        </div>   
        
    );
}

export default Pessoa; 