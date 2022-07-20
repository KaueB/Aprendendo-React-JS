import React, { useState, useEffect } from "react";

const Components05 = () => {

    const clientes = ['Joao', 'Ana', 'Carlos']
    const produtos = ['Pão', 'Manteiga', 'Leite']
    const vendas = ['1 x Pão (João)', '2 x Manteiga (Ana)', '3 x Leite (Carlos)']

    const [info, setInfo] = useState('clientes')
    const [valor, setValor] = useState(100)

    useEffect(() => {
        console.clear()
        switch (info) {
            case 'clientes':
                console.table(clientes)
                break;
            case 'produtos':
                console.table(produtos)
                break;
            case 'vendas':
                console.table(vendas)
                break;
        }
    }, [info])

    const styleButton = {
        height: '2rem',
        width: '5rem',
        margin: '10px 2px 0px 2px',
    }

    return (
        <div className="container">
            <h1>React Hooks - useEffect</h1>
            <hr />
            <div>
                <h3>
                    {info}
                </h3>
                <button onClick={() => setInfo('clientes')} style={styleButton}>Cliente</button>
                <button onClick={() => setInfo('produtos')} style={styleButton}>Produtos</button>
                <button onClick={() => setInfo('vendas')} style={styleButton}>Vendas</button>
                <hr />
                <h3> {valor} </h3>
                <button onClick={() => setValor(valor + 10)} style={styleButton}>Aumentar</button>
            </div>
        </div>
    )
}

export default Components05