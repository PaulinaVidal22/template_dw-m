import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/items';

const useFetchItems = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setItems(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchItems(); 
  }, []); 


  return { items, loading, error };
};

export default useFetchItems;