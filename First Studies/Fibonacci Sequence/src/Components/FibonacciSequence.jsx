import React, {useState} from 'react';

import './style/FibonacciSequence.css'
import '../index.css';
import '../App.css';

function FibonacciSequence(props) {
    const [number, setNumber] = useState(null)
    const [result, setResult] = useState('Resultado')

    /* 
    function handleResult() {
        if (number <= 1 ) {
            setResult('0 1')
        } else if ( number >=500  ) {
            setResult('Escolher um número menor')
        } else {
            let penultimateNumber = 0
            let lastNumber = 1
            let endAnswer = 0

            let count = 3
            do {
                endAnswer = lastNumber + penultimateNumber;
                penultimateNumber = lastNumber;
                lastNumber = endAnswer;
                count++;
            } while (count <= number);
            setResult(endAnswer)
        }
    } 
    */

    function handleResult() {
        if (number < 1 ) {
            setResult('0 1')
        } else if ( number >= 500  ) {
            setResult('Escolher um número menor')
        } else {
            let penultimateNumber = 0
            let lastNumber = 1
            let endAnswer = 0
            let resultFib = '0 1'

            while (endAnswer <= number - 1) {
                endAnswer = lastNumber + penultimateNumber;
                resultFib += (' ' + endAnswer + '')
                penultimateNumber = lastNumber;
                lastNumber = endAnswer;
            };
            setResult(resultFib)
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