import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoritesList from './FavoritesList'; 
import RecommendationsList from './RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './SearchBar'; 
import RecipeList from './RecipeList';
import EditRecipeForm from './components/EditRecipeForm'
import RecipeList from './components/RecipeList'

function App() {
  const [count, setCount] = useState(0)

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </Router>
    <div> <h1>Recipe Finder</h1> <SearchBar /> <RecipeList /></div>
    <div> <h1>Recipe Finder</h1> <FavoritesList /> <RecommendationsList /> </div>
    </>
  )
}

export default App