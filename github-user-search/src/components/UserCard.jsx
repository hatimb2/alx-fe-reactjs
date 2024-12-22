import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name || user.login}</h3>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <p>{user.bio || 'No bio available'}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
