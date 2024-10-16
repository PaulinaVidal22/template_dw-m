import React from 'react'
import DisplayButton from '../displayButton/displayButton'
import DeleteButton from '../deleteButton/deleteButton'
import './card.css'

const Card = ({ item, onDelete, onShowDetails }) => {
  return (
    <div 
        className="card clickable-card "
        style={{ cursor: 'pointer' }}
        >
    
      <div className='card-content'>
        <h2 className='card-title title is-6'>{item.title}</h2>
        <DisplayButton itemId= {item.id} onShowDetails={onShowDetails} ></DisplayButton>
        <DeleteButton itemId={item.id} onDelete={onDelete}></DeleteButton>
      </div>
      
    </div>
  );
};

export default Card;



