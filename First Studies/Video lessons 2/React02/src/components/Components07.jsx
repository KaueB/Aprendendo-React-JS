import React, { useEffect, useRef, useState } from "react";

const Components07 = () => {

    const [textResult, setTextResult] = useState('')
    const totalChange = useRef(0)
    useEffect(() => {
        totalChange.current++
    })

    return (
        <div className="container">
            <h1> React Hooks - useRef</h1>
            <hr />
            <input type="text" value={textResult} onChange={event => { setTextResult(event.target.value) }}/>
            <hr />
            <p style={{fontSize: '20px'}}> O texto é : <strong> {textResult} </strong></p>
            <hr />
            <p>Total renders: <strong>{totalChange.current}</strong></p>
        </div>
    )
}

export default Components07;