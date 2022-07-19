import React from "react";

import dados_clientes from "../dadosClientes/dados_clientes";

const ComponenteSeis = (props) => {

    function cliente() {
        return (
            dados_clientes.map(cliente => {
                return <li key={cliente.id_cliente}>
                    Nome: {cliente.nome} | Email: {cliente.email}
                </li>
            })
        )
    }

    return (
        <div className="componente">
            <p className="titulo">
                Título: {props.titulo}
            </p>

            <ul className="cliente">
                {cliente()}
            </ul>

        </div>
    )
}

export default ComponenteSeis;