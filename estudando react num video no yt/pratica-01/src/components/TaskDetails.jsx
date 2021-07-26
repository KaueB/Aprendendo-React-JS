import React from 'react';
import { useHistory, useParams} from "react-router-dom"

import "./Button.css";

import "./TaskDetails.css";

const TaskDetails = () => {

    const params = useParams(); 
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    } 

    return (
        <>
            <div className="back-button-container">
                <button className='button' onClick={handleBackButtonClick}>Voltar</button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illo eveniet deserunt nesciunt excepturi aspernatur ipsam culpa atque. Dolorum commodi quis corrupti deleniti quae! Ut iure dolores reprehenderit impedit corrupti.</p>
            </div>
        </>
    );
}
 
export default TaskDetails;