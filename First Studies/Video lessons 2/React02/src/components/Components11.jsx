import React, { useState, useRef } from "react"
export default function App() {

    // style
    const styleContainerTasks = {
        display: 'flex',
        // flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
    const styleTasks = {
        alignItems: 'flex-start',
        backgroundColor: '#464646',
        margin: '10px',
        padding: '20px',
    }

    const styleButton = {
        padding: '5px',
        margin: '10px 2px 0px 2px',
        flexDirection: 'row',
    }

    const styleInputText = {
        padding: '8px',
        fontSize: '15px'
    }

    // useState
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return '' })

    // useRef
    const idTarefa = useRef(0)
    const inputRef = useRef()

    // fuction
    function adicionarTarefa() {
        if (tarefa !== '') {
            setListaTarefas(old => { return [...old, { id: idTarefa.current, texto: tarefa }] })
            idTarefa.current = idTarefa.current + 1
            setTarefa('')
            inputRef.current.focus()
        } else {
            window.alert('Verificar o que está a ser escrito')
        }
    }

    function limparTarefas() {
        setListaTarefas(old => { return [] })
        idTarefa.current = 0
    }

    function removerTarefa(id) {
        const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
        setListaTarefas(tmp)
    }

    return (
        <div className="container">
            <h3>GESTOR DE TAREFAS</h3>
            <hr />
            <input
                ref={inputRef}
                type="text"
                value={tarefa}
                onChange={(evento) => { setTarefa(evento.target.value) }}
                style={styleInputText}
            />
            <div>
                <button onClick={adicionarTarefa} style={styleButton}>Adicionar</button>
                <button onClick={limparTarefas} style={styleButton}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas:</p>
            <div style={styleContainerTasks}>
                {listaTarefas.map((tarefa) => {
                    return (
                        <div style={styleTasks}>
                            <p key={tarefa.id}>
                                {tarefa.texto} -
                                <button 
                                    onClick={() => { removerTarefa(tarefa.id) }} 
                                    style={{ padding: '1px', marginLeft: '3.5px' }}
                                >
                                    remover
                                </button>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}