import React from 'react';

import './style/FibonacciSequence.css'
import '../index.css';
import '../App.css';

function FibonacciSequence() {
    return (
        <div>
            <h1> Escolhe o número final </h1>
            <input type='Number' name='number' />
            <button>Iniciar</button>

            
        </div>
    );
}

export default FibonacciSequence;