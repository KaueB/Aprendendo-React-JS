import React, { useState } from "react";
import Nomes from "./dataBase/nomes";

import './style/Component15.css'

const Components15 = () => {

    const [nome, setNome] = useState('')
    const [nomes, setNomes] = useState([])

    function guardarNome() {
        setNomes(tmp => [
            ...tmp,
            nome
        ])
    }

    return (
        <div className="container">
            <h1>React Unique ID</h1>
            <hr />
            <div style={{ display: 'flex'}}>
                <input type="text" onChange={e => { setNome(e.target.value) }} id='inputText'/>
                <button onClick={guardarNome} id='buttonText'>Guarda Nome</button>
            </div>
            <hr />
            <p>Lista:</p>
            <Nomes nomes={nomes} />
        </div>
    )
}

export default Components15;