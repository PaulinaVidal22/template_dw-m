import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const useFetchItem = () => {

  const { id } = useParams();

  const url = `http://localhost:3000/items/${id}`;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchItem = async () => {
    try {
      const response = await fetch( url , { method: "GET" })
      const data = await response.json();
      setItem(data[0]);
      // setItem(data);
      setLoading(false);

    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchItem(); 
    }
  }, [id]);

  return { item, loading, error };
};

export default useFetchItem;
