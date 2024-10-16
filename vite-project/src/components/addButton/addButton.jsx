import React from "react";
import './addButton.css'

const AddButton = ({handleAdd}) => {
    return (
        <>
            <button className='add-button' onClick={handleAdd}>+ Add Item</button>
        </>
    );
};

export default AddButton;
