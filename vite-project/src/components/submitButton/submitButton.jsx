import React from "react";
import './submitButton.css'

const SubmitButton = ({handleSubmit}) => {
    return (
        <>
            <button type="submit"className='submit-button' onClick={handleSubmit}>Submit</button>
        </>
    )
};

export default SubmitButton;