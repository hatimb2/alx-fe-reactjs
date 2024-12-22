import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  const query = `q=${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
