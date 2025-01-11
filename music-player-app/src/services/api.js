export const fetchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      return data.data; 
    } catch (error) {
      console.error("Error fetching tracks:", error);
      throw new Error("Failed to fetch tracks");
    }
  };
  
  export const fetchTrackDetails = async (id) => {
    try {
      const response = await fetch(`https://api.deezer.com/track/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching track details:", error);
      throw new Error("Failed to fetch track details");
    }
  };