import React from "react";

const User = ({user}) => {

    // style
    const styleUserContainer = {
        display: 'flex',
        border: '2px solid black',
        padding: '5px',
        margin: '4px',
        backgroundColor: 'lightgray',
        color:'black',
        minWidth: '225px',
        alignItems: 'flex-end',
    }

    const styleImgUser = {
        width: '30px',
        height: '30px'
    }

    return (
        <div style={styleUserContainer}>
            <img src={user.image} alt="imgUser" style={styleImgUser}/>
            <p> Nome: <strong>{user.firstName} {user.lastName}</strong> </p>
        </div>
    )
}

export default User;