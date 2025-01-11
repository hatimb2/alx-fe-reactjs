import React from "react";
import { useState,useEffect } from 'react'

const useFetchTracks = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      const fetchTracks = async () => {
        try {
          const response = await fetch(`https://api.deezer.com/search?q=${query}`);
          const result = await response.json();
          setData(result.data); // Set the track data from the response
        } catch (err) {
          setError('Error fetching tracks');
          console.error(err);
        }
      };

      fetchTracks();
    }
  }, [query]);

  return { data, error };
};

export default useFetchTracks;
