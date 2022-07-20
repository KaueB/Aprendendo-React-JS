import React, { useState } from "react";

const Components01 = () => {

    const [valor, setValor] = useState(0)

    function incrementar() {
        setValor(valor + 1)
        console.log(valor)
    }

    const styleButton = {
        height: '2rem',
        width: '5rem',
        marginTop: '0.8rem',
    }

    return (
        <div className="container">
            <h1>React Hooks</h1>
            <hr />
            <div>
                <h3>Valor = {valor}</h3>
                <button onClick={incrementar} style={styleButton}>Incrementar</button>
            </div>
        </div>
    )
}

export default Components01