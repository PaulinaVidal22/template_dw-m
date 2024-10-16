import { useState } from 'react';

const url = 'http://localhost:3000/items';

const useDeleteItem = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const deleteItem = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      // window.location.reload(); 
    } catch (err) {
      setError(err);
    }
  };

  const removeItem = (id) => {
    deleteItem(id).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return { removeItem, error };
};

export default useDeleteItem;
