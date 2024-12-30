import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, apiKey) => {
  const url = `https://api.github.com/search/users?q=${username}+location:${location}+repos:>=${minRepos}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${apiKey}`,  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
    },
  });

  return response.data;
};
