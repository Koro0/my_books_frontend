import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Index from './pages/Home/home';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
