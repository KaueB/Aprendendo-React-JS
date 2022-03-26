import React from 'react'
import Img from 'react-image'

import manha from "../img/manha.png"

function Horas() {
    return (
        <div>
            <header>
                <h1 id='hoje'>Dia da Semana Dia/Mês/Ano</h1>
                <h1 id='bom dia'>Hora do dia</h1>
            </header>
            <section>
                <div id = "agora">
                    00:00:00
                </div>
                <div id='foto'>
                    <img id = 'imagem' src={manha} alt="Foto do dia"/>
                </div>
            </section>
        </div>
    );
}

export default Horas;