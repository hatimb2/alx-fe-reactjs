import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

const getUser = (username) => {
  return axios.get(`${API_URL}${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });
};

export default getUser;
