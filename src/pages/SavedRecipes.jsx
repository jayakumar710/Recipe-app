import React, { useState, useEffect } from 'react';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    setSavedRecipes(saved);
  }, []);

  const handleUnsave = (id) => {
    const updated = savedRecipes.filter(recipe => recipe.id !== id);
    setSavedRecipes(updated);
    localStorage.setItem('savedRecipes', JSON.stringify(updated));
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
    <div className="saved-recipes">
      <header>
        <h2> 👩‍🍳 𝓢𝓪𝓿𝓮𝓭 𝓐2𝓩 𝓡𝓮𝓬𝓲𝓹𝓮𝓼 🍴 </h2>
      </header>
      {savedRecipes.length === 0 ? (
        <p>No saved recipes .</p>
      ) : (
        <div className="recipes-grid">
          {savedRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card" onClick={() => openModal(recipe)}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={(e) => { e.stopPropagation(); handleUnsave(recipe.id); }}>Unsave</button>
            </div>
          ))}
        </div>
      )}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;