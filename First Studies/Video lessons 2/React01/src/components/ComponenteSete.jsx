import React, { useState } from "react";

import './style/ComponenteSete.css'

const ComponenteSete = (props) => {

    const [valor, setValor] = useState(true)

    function handleValue() {
        if (valor === true) {
            setValor(false)
        } else {
            setValor(true)
        }
    }

    return (
        <div className="componente">
            <p className="titulo">
                Título: {props.titulo}

            </p>
            <br />
            <div className="trueOrFalse">
                <p className="changeTheValue">
                    <button className="buttonToChangeTheValue" onClick={handleValue}> Trocar </button>
                    {
                        valor === true ?
                            <p className="textTrueOrFalse" style={{ color: "green" }}>
                                Verdadeiro
                            </p>
                            :
                            <p className="textTrueOrFalse" style={{ color: "red" }}>
                                Falso
                            </p>
                    }
                </p>
            </div>
        </div>
    )
}

export default ComponenteSete;