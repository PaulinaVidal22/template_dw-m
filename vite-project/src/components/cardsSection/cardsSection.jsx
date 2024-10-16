import React from 'react';
import Card from '../card/card.jsx';
import './cardsSection.css';

const CardsSection = ({ items, onDelete, onShowDetails }) => {

  return (
    <div className="cards-section">
      {items && items.map((item) => (
        <Card key={item.id} item={item} onDelete={onDelete} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};

export default CardsSection;