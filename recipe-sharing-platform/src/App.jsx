import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <HomePage />
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe detail page route */}
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Route to the AddRecipeForm */}
      </Routes>
    </Router>
    </>
  )
}

export default App
