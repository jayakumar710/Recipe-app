import React, { useState, useEffect } from 'react';
import recipesData from '../data/recipes';

const Recipe = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem('likedRecipes') || '[]');
    setLikedRecipes(liked);
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLike = (id) => {
    const isLiked = likedRecipes.includes(id);
    if (isLiked) {
      // Unlike
      setRecipes(recipes.map(recipe =>
        recipe.id === id ? { ...recipe, likes: recipe.likes - 1 } : recipe
      ));
      const updated = likedRecipes.filter(lid => lid !== id);
      setLikedRecipes(updated);
      localStorage.setItem('likedRecipes', JSON.stringify(updated));
    } else {
      // Like
      setRecipes(recipes.map(recipe =>
        recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
      ));
      const updated = [...likedRecipes, id];
      setLikedRecipes(updated);
      localStorage.setItem('likedRecipes', JSON.stringify(updated));
    }
  };

  const handleSave = (id) => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    const recipe = recipes.find(r => r.id === id);
    const isSaved = recipe.saved;
    if (!isSaved) {
      // now saving
      localStorage.setItem('savedRecipes', JSON.stringify([...savedRecipes, { ...recipe, saved: true }]));
    } else {
      // now unsaving
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes.filter(r => r.id !== id)));
    }
    setRecipes(recipes.map(r => r.id === id ? { ...r, saved: !r.saved } : r));
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div>
    
    <header >
        <h1> 🧑‍🍳 𝓐2𝓩 𝓡𝓮𝓬𝓲𝓹𝓮 𝓪𝓹𝓹 🍵 </h1>
       
      </header>
        <div className='saved-link1'>
         <a href="/saved-recipes" className="saved-link">View Saved Recipes</a>
        </div>
      
      <div className="search-container">
       
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
       <div className="recipes">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card" onClick={() => openModal(recipe)}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div className="card-buttons">
            <button onClick={(e) => { e.stopPropagation(); handleLike(recipe.id); }}>
              {likedRecipes.includes(recipe.id) ? 'Unlike' : 'Like'} ({recipe.likes})
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleSave(recipe.id); }}>{recipe.saved ? 'Unsave' : 'Save'}</button>
          </div>
        </div>
      ))}
      {modalOpen && selectedRecipe && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <h3>{selectedRecipe.title}</h3>
            <p>{selectedRecipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {selectedRecipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
            </ul>
            <a href={selectedRecipe.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
            <br />
            <button onClick={() => handleLike(selectedRecipe.id)}>Like ({selectedRecipe.likes})</button>
            <button onClick={() => handleSave(selectedRecipe.id)}>{selectedRecipe.saved ? 'Unsave' : 'Save'}</button>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default Recipe;