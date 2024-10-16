import React from "react";
import './editionButton.css'

const EditionButton = ({handleEdit}) => {
    return (
        <>
            <button className='edit-button' onClick={handleEdit}>Edit Item</button>
        </>
    );
};

export default EditionButton;