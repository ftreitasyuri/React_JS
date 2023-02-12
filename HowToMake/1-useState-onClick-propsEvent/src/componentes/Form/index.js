// Exemplo de como usar o useState HOOKs
/*
 Para ver funcionando faça um cadastro mas, antes aperte F12 na tela do seu navegador ou clique
 com o botão direto do mouse e em seguida clique em inspecionar, e no devTools procure por console
*/

import { useState } from "react";


function Form(){


    function cadastrarUsuario(e){
        // o (e) é da no mesmo de (evento)
        return(
            e.preventDefault(),
            console.log('Cadastrou o usuário'),
            console.log(`Usuário (${name}), foi cadastrado com a sneha (${password})`)
            
        )
    }

    // variáveis do tipo objeto list para aplicar o hooks useState
    const [name, setName] = useState()
    const [password, setPass] = useState()

    return(
        <div id="container">
            <h2>Usando o useState hooks</h2>
            <form id="formulario"  onSubmit={cadastrarUsuario}>
                <div id="nome">
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div id="senha">
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPass(e.target.value)} />
                </div>

                <div id="botao">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form