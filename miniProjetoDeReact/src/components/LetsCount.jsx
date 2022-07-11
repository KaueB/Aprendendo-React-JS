import React, { useState } from 'react';
import './style/LetsCount.css'

function LetsCount() {

    const [resultCount, setResultCount] =useState('Preparando a conta...')

    const [accountStart, setAccountStart] = useState(0)
    const [accountSteps, setAccountSteps] = useState(0)
    const [endOfAccount, setEndOfAccount] = useState(0)

    const [sumOfResults, setSumOfResults] = useState('Contando...')
    
    function Count() {
        if (accountStart===0 || endOfAccount===0 || accountSteps===0) {
            alert ('[ERRO] Faltam dados!')
        } else {
            if (accountSteps <= 0) {
                alert('Passo invalido! Considerando PASSO 1')
                setAccountSteps(1)
            }
            
            if (accountStart < endOfAccount) {
                // Contagem crescente
                for ( let c = accountStart ; c <= endOfAccount ; c + accountSteps) {
                    setSumOfResult(sumOfResults += 'c') 
                }
                sumOfResults += (` \u{1f3C1}` )
            } else {
                // Contagem regressiva
                for ( let c = accountStart ; c >= endOfAccount ; c - accountSteps) {
                    sumOfResults +=( `${c} \u{1f449}` )
                }
                sumOfResults +=( ` \u{1f3C1}` )
            } 
        setResultCount(sumOfResults)
        }
    }

    return (
        <div id='LetsCount'>
            <header>
            <h1>Vamos Contar</h1>
        </header>
        <section>
            <div>
                <p>Início:
                    <input type="number" id="txti" onChange={e => setAccountStart(e.target.value)}/>
                </p>
                <p>Fim:
                    <input type="number" id="txtf" onChange={e => setEndOfAccount(e.target.value)}/>
                </p>
                <p>Passo:
                    <input type="number" id="txtp" onChange={e => setAccountSteps(e.target.value)}/>
                </p>
                <p> <input type="button" value="contar" onClick={Count}/> </p>
            </div>
            <div>
                {resultCount}
            </div>
        </section>
        </div>
    );
}

export default LetsCount;