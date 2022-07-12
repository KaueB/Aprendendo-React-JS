import React from 'react';

function ComponenteUm(props) {
    return (
        <div className='componente'>
            <p>Título: Componente Um</p>
            <p>Componente mais simples de React.</p>
            <p>Autor: {props.autor}</p>
        </div>
    )
}

export default ComponenteUm;