import React, { useState } from 'react';
import ProfilePage from './ProfilePage';  // Import ProfilePage (child of the Provider)
import UserContext from './UserContext';  // Import UserContext
import Counter from './components/Counter';  // Other components that do not need the context
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  // User data that we will pass down through the context
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <>
      {/* Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Main Heading */}
      <h1>Vite + React</h1>

      {/* Count button */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      {/* Footer Link */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Static components */}
      <div className="App">
        <WelcomeMessage />
      </div>
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        <MainContent />
      </div>
      <div className="Footer">
        <Footer />
      </div>

      {/* This is where we use the UserContext.Provider to pass userData */}
      <UserContext.Provider value={userData}>
        {/* ProfilePage and its children can access userData */}
        <ProfilePage />
      </UserContext.Provider>

      {/* Other components like Counter that don't need userData */}
      <Counter name="app counter" />
    </>
  );
}

export default App;
