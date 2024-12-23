import React, { useState } from 'react';
import './src/App.jsx';
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <UserSearch />
    </div>
  );
}

export default App;
