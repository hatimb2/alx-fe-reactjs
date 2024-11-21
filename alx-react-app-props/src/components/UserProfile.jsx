import React, { useContext } from 'react'; // Import React and useContext hook
import UserContext from '../UserContext';  // Import UserContext to access the data

function UserProfile() {
  // Consume user data from the context
  const userData = useContext(UserContext);

  // If userData is null or undefined (edge case handling)
  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;