import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages & component
import Header from './components/Header/Header.component';
import Recipes from './pages/Recipes/recipes.page';
import Context from './components/Context/Context.component';
import UserInterface from './pages/Profile/User.page';
import Connexions from './pages/Connexion/Connexion.page';
import Recipe from './pages/Recipe/recipe.page';
import Index from './pages/Index/Index.page';
import Footer from './components/Footer/Footer.component';
import Error from './pages/Error/error.page';
import Blog from './pages/Blog/blog.page';
import Novels from './pages/Novels/novel.page';
import NewRecipe from './pages/New_recipe/newRecipe.page';
import Cocktail from './pages/Cocktail/cocktail.page';

import './styles/App.scss';

function App() {
  const [darkMode, setDarkMode ]= useState(false)
  
  return (
    <BrowserRouter>
      <Context.Provider value={{darkMode, setDarkMode }}>
        <header>
            <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/add_recipes' element={<NewRecipe />} />
            <Route path='/novels' element={<Novels />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='/Connexion' element={<Connexions />} />
            <Route path='/user' element={<UserInterface />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Cocktail' element={<Cocktail />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Context.Provider>
    </BrowserRouter>
    );
}

export default App;
