import React, { useRef, useState } from "react";

const Components07 = () => {

    // style
    const styleButton = {
        height: '2rem',
        width: '5rem',
        margin: '10px 2px 0px 2px',
    }

    // function
    const [textResult, setTextResult] = useState('')
    const [secondTextResult, setSecondTextResult] = useState('')

    const inputRef = useRef()
    const input2Ref = useRef()

    function functionExecutor() {
        inputRef.current.focus()
        console.log(textResult,'-', secondTextResult)
    }

    function secondFunctionExecutor() {
        input2Ref.current.value = "Thays De Souza"
        input2Ref.current.focus()
        setSecondTextResult('Thays De Souza')
    }

    return (
        <div className="container">
            <h1> React Hooks - useRef</h1>
            <hr />
            <div>
                <input
                    ref={inputRef}
                    type="text" value={textResult}
                    onChange={event => { setTextResult(event.target.value) }}
                />
                
                <input
                    ref={input2Ref}
                    type="text"
                    value={secondTextResult}
                    onChange={event => { setSecondTextResult(event.target.value) }}
                    style={{ marginLeft: '5px' }}
                />

                <hr />
                <button onClick={functionExecutor} style={styleButton}> Clicar </button>
                <button onClick={secondFunctionExecutor} style={styleButton}> Clicar </button>
            </div>
        </div>
    )
}

export default Components07;