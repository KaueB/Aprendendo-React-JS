import React, {useState} from 'react';

import './style/FibonacciSequence.css'
import '../index.css';
import '../App.css';

function FibonacciSequence(props) {
    const [number, setNumber] = useState(null)
    const [result, setResult] = useState('Resultado')

    const fibonacci = (num, memo) => {
        
    }

    function handleResult() {
        if (number <= 1 ) {
            setResult('0 1')
        } else if ( number >=500  ) {
            setResult('Escolher um número menor')
        } else {
            let penultimateNumber = 0
            let lastNumber = 1
            let endAnswer = 0

            if (number <= 2 ) {
                if( number <= 2 ) {
                    endAnswer = number - 1
                } else {
                    var count = 3
                    while (count <= number) {
                    endAnswer = lastNumber + penultimateNumber;
                    penultimateNumber = lastNumber;
                    lastNumber = endAnswer;
                    count++;
                    }
                }
                setResult(endAnswer)
            }
            
        }
    }
    
    return (
        <div>
            <h1> Escolhe o número final </h1>
                <input type='number' min={0} max={500} onChange={e => setNumber(e.target.value)}/>
                <button onClick={handleResult} >Iniciar</button>
            <h1>{result}</h1>
        </div>
    );
}

export default FibonacciSequence;