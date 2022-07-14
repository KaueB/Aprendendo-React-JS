import React from 'react';

function ComponenteUm(props) {
    return (
        <div className='componente'>
            <p className='titulo'>Título: {props.titulo}</p>
            <p>{props.children}</p>
            <p>Autor: {props.autor}</p>
        </div>
    )
}

export default ComponenteUm;