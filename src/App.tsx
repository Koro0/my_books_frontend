import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Recipes from './pages/Recipes/recipes.page';
import Context from './components/Context/Context.component';
import UserInterface from './pages/Profile/User.page';
import Connexions from './pages/Connexion/Connexion.page';
import Recipe from './pages/Recipe/recipe.page';


import './styles/App.css';

function App() {
  const [darkMode, setDarkMode ]= useState(false)
  
  return (
    <BrowserRouter>
    <Context.Provider value={{darkMode, setDarkMode }}>
    <Header />
    <Routes>
      <Route path='/home' element={<Recipes />} />
      <Route path='/recipe/:id' element={<Recipe />} />
      <Route path='/Connexion' element={<Connexions />} />
      <Route path='/user' element={<UserInterface />} />
    </Routes>
    </Context.Provider>
    </BrowserRouter>
    );
}

export default App;
