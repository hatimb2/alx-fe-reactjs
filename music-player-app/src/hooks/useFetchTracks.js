import { useState, useEffect } from 'react'

const getAccessToken = async () => {
  const clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // Replace with your Spotify client ID
  const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET'; // Replace with your Spotify client secret
  const encoded = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token; // Return the access token
};

const useFetchTracks = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return; // Only fetch if there is a query.

    const fetchTracks = async () => {
      setLoading(true);
      try {
        const token = await getAccessToken(); // Get the access token
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const result = await response.json();

        if (result.tracks.items.length === 0) {
          setError('No tracks found');
        } else {
          setData(result.tracks.items); // Store the tracks data
        }
      } catch (err) {
        setError('Error fetching tracks');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [query]);

  return { data, error, loading };
};

export default useFetchTracks;
