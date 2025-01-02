import axios from 'axios';

// Fetch GitHub user data with advanced search functionality
const fetchUserData = async (query) => {
  try {
    // API URL with dynamic query
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    
    // Return the items (users) from the API response
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching user data from GitHub');
  }
};

export { fetchUserData };
