import React, { useState } from "react";

const Components03 = () => {

    const [player, setPlayer] = useState({
        name: 'Joaquin',
        score: 0
    })

    function alterar() {
        setPlayer(e => {
            return {
                ...e,
                score: e.score + 1
            }
        })
    }

    const styleButton = {
        height: '2rem',
        width: '10rem',
        fontSize: '17px',
        marginTop: '6px',
    }

    return (
        <div className="container">
            <h1>React Hooks - useState</h1>
            <hr style={{ textAlign: 'center', paddingRight: '80%', margin: '5px 0px' }} />
            <h3>Nome: {player.name}</h3>
            <h3>Pontos: {player.score}</h3>
            <button onClick={alterar} style={styleButton}>Alterar a pontuação</button>
        </div>
    )
}

export default Components03