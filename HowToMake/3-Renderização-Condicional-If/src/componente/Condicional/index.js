import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setuserEmail] = useState()

    // métodos da função
    function enviarEmail (e){
        e.preventDefault()
        setuserEmail(email)
        
    }

    function limparEmail (e){
        setuserEmail('')
        
    }

    // Fim dos métodos

    return (
        <h2>Cadastre o seu e-mail:</h2>,

        <form>
            <input type="email"
            placeholder="Digite o seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={enviarEmail} >Enviar e-mail</button>
            {/* Condicional abaixo valida se userEmail é verdadeiro, ou seja, se está preenchido */}
            {userEmail &&(
                <div>
                    <p>O e-mail do usuário é: {userEmail} </p>
                    {/* A linha abaixo com a função limparEmail serve para que quando clicar
                    no botão (Limpar e-mail) a condição deixe de ser true=verdadeiro
                    logo essa mesma div deixa de aparece para o usuário */}
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>   
            )}
        </form>
        
    )

}

export default Condicional