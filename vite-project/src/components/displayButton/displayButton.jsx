import React from 'react';
import './displayButton.css'

const DisplayButton = ({itemId, onShowDetails}) => {
    return (
        <>
            <button className='details-button' onClick={() => onShowDetails(itemId)}>Details</button>
        </>
    );
};

export default DisplayButton;