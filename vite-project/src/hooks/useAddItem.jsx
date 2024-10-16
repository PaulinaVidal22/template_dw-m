import { useState } from 'react';

const url = 'http://localhost:3000/items';

const useAddItem = () => {
  const [error, setError] = useState(null);

  const addItem = async (newItem) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      // window.location.reload(); 
      const savedItem = await response.json();
      return savedItem;
    } catch (err) {
      setError(err);
    }
  };

  const createItem = (newItem) => {
    addItem(newItem).then((savedItem) => {
      setItems([...items, savedItem]);
    });
  };

  return { createItem, error };
};

export default useAddItem;
