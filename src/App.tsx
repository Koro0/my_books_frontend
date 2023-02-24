import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Index from './pages/Home/home';
import Context from './components/Context/Context.component';

import './styles/App.css';

function App() {
  const [darkMode, setDarkMode ]= useState(false)
  
  return (
    <BrowserRouter>
    <Context.Provider value={{darkMode, setDarkMode }}>
    <Header />
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Login' element={<Index />} />
      <Route path='/Register' element={<Index />} />
      <Route path='/' element={<Index />} />
    </Routes>
    </Context.Provider>
    </BrowserRouter>
    );
}

export default App;
