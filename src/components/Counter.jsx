import { useState } from "react"

// usuario = ['Diego3g', 'Dieegosf', 'Danileao']

// Mutabilidade

// usuario.push('rafacamarda')

// Imutabilidade

// novoUsuario = [...usuarios, 'rafacamarda']

export function Counter() {
    const [counter, setCounter] = useState(0)
    
    function increment() {
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}