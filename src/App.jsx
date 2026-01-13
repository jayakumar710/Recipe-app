import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Recipe from './pages/Recipe';
import AdminRecipe from './pages/AdminRecipe';
import SavedRecipes from './pages/SavedRecipes';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin-recipes" element={<AdminRecipe />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
