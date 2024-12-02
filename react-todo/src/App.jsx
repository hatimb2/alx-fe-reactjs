import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TodoList />  {/* Render TodoList component */}
    </div>
  );
}
export default App;
