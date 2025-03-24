import {useState} from 'react'

const Contador = () => {
    // declarando hook - useState - manipula o estado da variavel
    const [contador, setContador] = useState(0);

    return (
        <>
        <h1>Meu Contador</h1>

        <p>Você Clicou {contador} vezes.</p>
        <button onClick={()=>setContador(contador + 1)}>Aumentar</button>
        <button onClick={()=>setContador(contador - 1)}>Diminuir</button>
        </>
    )
}

export default Contador