function Saudacao({nome}){
    
    function gerarSaudacao(algumNome){
        return(
            `Óla, ${algumNome}, tudo bem!`
        )
    }

    return (
        // usando rederizando condicional
        // se não estiver preenchido, não aparece nada na textDecorationStyle: 
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao