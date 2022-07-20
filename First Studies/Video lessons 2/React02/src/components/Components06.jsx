import React, { useState, useEffect } from "react";

import User from "./dataBase/User";

const Components06 = () => {

    // style 
    const styleUsers = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(json => {
                // console.log(json.users) /* Para poder mostrarn no console */
                setUsers(json.users)
            })
    }, [])

    return (
        <div className="container">
            <h1>React Hooks</h1>
            <hr />
            <h3 style={{ margin: '5px' }}>Registered Users:</h3>
            <div style={styleUsers}>
                {users.map(user => {
                    return <User key={user.id} user={user} />
                })}
            </div>
        </div>
    )
}

export default Components06