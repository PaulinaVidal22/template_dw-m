import React from 'react';
import { useNavigate } from 'react-router-dom';
import './goBackButton.css'

const GoBackButton = () => {
    const navigate = {useNavigate};

    return (
        <>
            <button 
              className="back-button button is-primary"
              onClick={() => navigate("/home")}>
              {"<"} go home
            </button>

        </>
    );
};

export default GoBackButton;