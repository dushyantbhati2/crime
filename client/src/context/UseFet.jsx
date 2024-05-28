import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (mounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { loading, data };
};