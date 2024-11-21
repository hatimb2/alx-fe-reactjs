import React, { useState } from 'react';
import ProfilePage from './ProfilePage'; 
import UserContext from './UserContext';  
import Counter from './components/Counter';  
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <Counter name="app counter" />
    </>
  );
}

export default App;
