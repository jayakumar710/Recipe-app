import React, { useState } from 'react';
import recipesData from '../data/recipes';

const AdminRecipe = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleEdit = (id) => {
    // Simple edit: prompt for new title
    const newTitle = prompt('Enter new title:');
    if (newTitle) {
      setRecipes(recipes.map(recipe =>
        recipe.id === id ? { ...recipe, title: newTitle } : recipe
      ));
    }
  };

  return (
    <div className="admin-recipes">
      <h2>Admin Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleEdit(recipe.id)}>Edit</button>
          <button onClick={() => handleDelete(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminRecipe;