import React from "react";
import './deleteButton.css'

const DeleteButton = ({itemId, onDelete}) => {
    return (
        <>
            <button className='delete-button' onClick={() => onDelete(itemId)}>Delete</button>
        </>
    );
};

export default DeleteButton;