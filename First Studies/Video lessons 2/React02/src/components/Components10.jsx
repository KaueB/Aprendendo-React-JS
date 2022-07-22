import React, { useEffect, useRef, useState } from "react";

const Components10 = () => {

    // style
    const styleButton = {
        height: '2rem',
        width: '5rem',
        margin: '10px 2px 0px 2px',
        flexDirection: 'row',
    }

    const styleContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    const styleDiv = {
        margin: '12px'
    }

    // function
    const [textResult, setTextResult] = useState('')
    const antecedente = useRef('')

    useEffect(() => {
        antecedente.current = textResult
    }, [textResult])

    function functionExecutor() {
        
    }

    return (
        <div className="container">
            <h1> React Hooks - useRef</h1>
            <hr />
            <div style={styleContainer}>
                <div style={styleDiv}>
                    <input
                        type="text"
                        onChange={e => { setTextResult(e.target.value) }}
                        style={{
                            fontSize: '20px',
                            padding: '8px',
                        }}
                    />
                    <hr />
                    <button onClick={functionExecutor} style={styleButton}> Clicar </button>
                </div>
                <div style={styleDiv}>
                    <p>Texto: <strong> {textResult} </strong></p>
                    <p>Anteriormente: <strong> {antecedente.current} </strong></p>
                </div>
            </div>
        </div>
    )
}

export default Components10;