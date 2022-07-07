import React, {useState} from 'react';

import './style/FibonacciSequence.css'
import '../index.css';
import '../App.css';

function FibonacciSequence() {
    const result = useState('Resultado')

    function finalResult() {
        
    }
    
    return (
        <div>
            <h1> Escolhe o número final </h1>
            <input type='Number' id='number'/>
            <button onclick="finalResult()">Iniciar</button>
            <h1>{result}</h1>
        </div>
    );
}

export default FibonacciSequence;