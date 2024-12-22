import React, { useState } from 'react';
import './App.css';
import UserSearch from './components/UserSearch';
import { fetchUserData } from './services/githubService';

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <UserSearch />
    </div>
  );
}

export default App;
