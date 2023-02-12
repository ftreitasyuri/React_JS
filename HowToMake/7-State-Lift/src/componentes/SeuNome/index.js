function SeuNome({setNome}) {
    return (

        
        <div>
            <p>Digite seu nome:</p>

            <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Qual é o seu nome?" />
            
        </div>
    )
}

export default SeuNome