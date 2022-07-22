import React, { useRef, useState } from "react";

const Components09 = () => {

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
    const inputRef = useRef()

    function functionExecutor() {
        console.log(inputRef.current.value)
        setTextResult(inputRef.current.value)
    }

    return (
        <div className="container">
            <h1> React Hooks - useRef</h1>
            <hr />
            <div style={styleContainer}>
                <div style={styleDiv}>
                    <input
                        ref={inputRef}
                        type="text"
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
                </div>
            </div>
        </div>
    )
}

export default Components09;