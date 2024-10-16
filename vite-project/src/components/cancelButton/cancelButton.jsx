import React from "react";
import './cancelButton.css';

const CancelButton = ({onClose}) => {
    return (
        <>
            <button type="button" className='cancel-button' onClick={onClose}>Cancel</button>
        </>
    );
};

export default CancelButton;