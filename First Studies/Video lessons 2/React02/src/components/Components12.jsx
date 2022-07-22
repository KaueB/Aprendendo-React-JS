import React, { useEffect, useMemo, useState } from "react";

const Components12 = () => {

    // useStates
    const [valor, setValor] = useState(() => { return 0 })
    const [numero, setNumero] = useState(() => { return 1000 })

    // useMemo
    // const valorCalculado = funcaoDemorada(valor)
    const valorCalculado = useMemo(() => {
        return funcaoDemorada(valor)
    }, [valor])

    // useEffect
    useEffect(() => {
        console.log('render, Components12')
    })

    // function
    function incrementar() {
        setValor(oldValor => oldValor + 1)
    }

    function incrementar2() {
        setNumero(oldNumero => oldNumero + 100)
    }

    function funcaoDemorada(num) {
        for(let i=0; i<100000000000; i++)
        return valor * 2
    }

    return (
        <div className="container">
            <h1>React Hooks - useMemo</h1>
            <hr />
            <p>Valor: {valor}</p>
            <p>Numero: {numero}</p>
            <p>Valor calculada: {valorCalculado}</p>
            <button onClick={incrementar}> Incrementar </button>
            <button onClick={incrementar2}> Segundo Incrementar </button>
        </div>
    )
}

export default Components12;