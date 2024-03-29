import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * context:
 */
import ContextTheme from './components/Context/ContextTheme.component';
import ContextAdmin from './components/Context/ContexteAdmin.component';
import ContextConnected from './components/Context/ContextConnected.component';
//pages & component
import Header from './components/Header/Header.component';

import Recipes from './pages/Recipes/allRecipes.page';
import UserInterface from './pages/Profile/User.page';
import Connexions from './pages/Connexion/connexion.page';
import Recipe from './pages/Recipes/oneRecipe.page';
import Index from './pages/Index/Index.page';
import Footer from './components/Footer/Footer.component';
import Error from './pages/Error/error.page';
import Blog from './pages/Blog/blog.page';
import Novels from './pages/Novels/novels.page';
import Novel from './pages/Novels/novel.page';
import Chapter from './pages/Novels/chapter.page';
import NewRecipe from './pages/New_recipe/newRecipe.page';
import Cocktail from './pages/Cocktail/cocktail.page';
import AllCocktails from './pages/Cocktail/allCocktails.page';
import IndexPageNutrition from './pages/Nutrition/index.page';

import './styles/App.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isConneted, setIsConneted] = useState(false);

  useEffect(() => {
    const elt = document.getElementById('root');
    const classNameElt = elt?.classList;
    const SwitchToggle = () => {
      if (darkMode) {
        classNameElt?.add('lightMode');
        classNameElt?.remove('darkMode');
      } else {
        classNameElt?.add('darkMode');
        classNameElt?.remove('lightMode');
      }
    };
    SwitchToggle();
  }, [darkMode]);
  return (
    <BrowserRouter>
      <ContextTheme.Provider value={{ darkMode, setDarkMode }}>
        <ContextConnected.Provider value={{ isConneted, setIsConneted }}>
          <header>
            <Header />
          </header>
          <main id="main">
            <ContextAdmin.Provider value={{ isAdmin, setIsAdmin }}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/add_recipes" element={<NewRecipe />} />
                <Route path="/novels" element={<Novels />} />
                <Route path="/novels/:novelId" element={<Novel />} />
                <Route
                  path="/novels/:novelId/:chapterId"
                  element={<Chapter />}
                />
                <Route path="/recipe/:recipeID" element={<Recipe />} />
                <Route path="/Connexion" element={<Connexions />} />
                <Route path="/user" element={<UserInterface />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Cocktail" element={<AllCocktails />} />
                <Route path="/Cocktail/:cocktailId" element={<Cocktail />} />
                <Route path="/Nutrition" element={<IndexPageNutrition />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </ContextAdmin.Provider>
          </main>
          <Footer />
        </ContextConnected.Provider>
      </ContextTheme.Provider>
    </BrowserRouter>
  );
}

export default App;
