import React from "react";

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p className="titulo">
                Título: {props.titulo}
            </p>
            <div className="children">
                {props.children}    
            </div>
        </div>
    )
}

export default ComponenteQuatro;