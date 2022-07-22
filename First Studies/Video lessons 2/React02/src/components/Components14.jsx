import React, { useReducer } from "react";

const Components14 = () => {

    // const Reducer
    const [state, dispatch] = useReducer(reducer, {
        score_1: 0,
        score_2: 0
    })

    // functuin reducer
    function reducer(state, action) {
        switch (action.type) {
            case "SCORE1":
                return {
                    score_1: state.score_1 + 1,
                    score_2: state.score_2
                }
            case "SCORE2":
                return {
                    score_1: state.score_1,
                    score_2: state.score_2 + 1
                }
            case "RESET":
                return {
                    score_1: 0,
                    score_2: 0
                }
            default:
                return state
        }
    }

    // function 
    function adicionar1() {
        dispatch({
            type: "SCORE1"
        })
    }
    
    function adicionar2() {
        dispatch({
            type: "SCORE2"
        })
    }

    function reset() {
        dispatch({
            type: "RESET"
        })
    }

    return (
        <div className="container">
            <h1>React Hooks - useReducer</h1>
            <hr />
            <div>
                <h3>Play 1: {state.score_1}</h3>
                <h3>Play 2: {state.score_2}</h3>

                <button onClick={adicionar1}>
                    Player1
                </button>

                <button onClick={adicionar2}>
                    Player2
                </button>

                <button onClick={reset}>
                    Reset Score
                </button>
            </div>
        </div>
    )
}

export default Components14;