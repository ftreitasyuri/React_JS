function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisa boas:</h3>
            {/* {itens.map((item) => (
                    <p>{item}</p>
                ) )               
                         
                } */}

            {/* estrutura condicional */}
            {itens.length >= 0 ? (
                itens.map(
                    (item, index) => <p key={index}>{item}</p>

                    )) : (
                <p>Não há itens na lista</p>
            )}


        </>
    )
}

export default OutraLista