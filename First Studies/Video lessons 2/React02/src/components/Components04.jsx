import React, { useState, useEffect } from "react";

const Components04 = () => {

    const [valor, setValor] = useState(100)
    const [valor2, setValor2] = useState(1000)

    function alterar() {
        setValor(e => {
            return (
                e + 10
            )
        })
    }

    function alterar2() {
        setValor2(e => {
            return (
                e + 100
            )
        })
    }

    useEffect(() => {
        console.log('alterado')
    }, [valor])

    const styleButton = {
        height: '2rem',
        width: '5rem',
        fontSize: '17px',
        marginTop: '6px',
    }

    const styleHr = {
        paddingRight: '100%',
        margin: '5px 0px',
    }

    return (
        <div className="container">
            <h1>React Hooks - useEffect</h1>
            <hr style={styleHr} />
            <div>
                <h3>First Value: {valor}</h3>
                <button onClick={alterar} style={styleButton}>alterar</button>
            </div>
            <hr style={styleHr} />
            <div>
                <h3>Second Value: {valor2}</h3>
                <button onClick={alterar2} style={styleButton}>alterar</button>
            </div>
        </div>
    )
}

export default Components04