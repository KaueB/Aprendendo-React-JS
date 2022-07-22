import React, { useReducer } from "react";

const Components13 = () => {

    // useReducer
    const [state, dispatch] = useReducer(reducer, {
        valor: 100,
        mostrar: true
    })

    // function reducer
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENTAR':
                return {
                    valor: state.valor + 1,
                    mostrar: state.mostrar
                }
            case 'VISIBILIDADE':
                return {
                    valor: state.valor,
                    mostrar: !state.mostrar
                }
            default:
                return state
        }
    }

    return (
        <dev className="container">
            <h1>React hooks - useReducer</h1>
            <hr />
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: '10px' }}>Valor: {state.valor}</p>
                {state.mostrar && <p>Colocar Visível</p>}
            </div>
            <button onClick={() => { dispatch({ type: "INCREMENTAR" }) }}>incrementar</button>
            <button onClick={() => { dispatch({ type: "VISIBILIDADE" }) }}>Mostrar/Esconder</button>
        </dev>
    )
}

export default Components13;

/* É a mesma coisa. 

import React, { useState } from "react";

const Components13 = () => {

    // useState
    const [valor, setValor] = useState(100)
    const [mostrar, setMostrar] = useState(false)

    return (
        <dev className="container">
            <h1>React hooks - useReducer</h1>
            <hr />
            <div style={{ display: 'flex'}}>
                <p style={{ marginRight: '10px'}}>Valor: {valor}</p>
                {mostrar && <p>Colocar visível</p>}
            </div>
            <button onClick={() => { setValor(e => e + 1) }}>incrementar</button>
            <button onClick={() => { setMostrar(!mostrar) }}>Mostrar/Esconder</button>
        </dev>
    )
}

export default Components13; 
*/