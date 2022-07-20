import React, { useState } from "react";

const Components02 = () => {

    const [valor, setValor] = useState(() => { return 0 })

    function diminuir() {
        setValor(e => e - 1)
    }

    function aumentar() {
        setValor(e => e + 1)
    }

    const styleButton = {
        height: '2rem',
        width: '5rem',
    }

    const styleChildrenContainer = {
        marginTop: '6px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    const styleResultValor = {
        margin: '0px 12px',
    }

    return (
        <div className="container">
            <h1>React Hooks</h1>
            <hr />
            <div style={styleChildrenContainer}>
                <button onClick={diminuir} style={styleButton}>Diminuir</button>
                <h3 style={styleResultValor}> Valor = {valor}</h3>
                <button onClick={aumentar} style={styleButton}>Aumentar</button>
            </div>
        </div>
    )
}

export default Components02