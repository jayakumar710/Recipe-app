import React, { useState, useEffect } from 'react';
import { recipeApi } from '../services/api';

const AdminRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await recipeApi.getAll();
      if (mounted) setRecipes(data);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await recipeApi.create({ title, description, image });
      setRecipes(prev => [res.recipe, ...prev]);
      setTitle('');
      setDescription('');
      setImage('');
      setMsg('Recipe created');
    } catch (err) {
      setMsg(err.message);
    }
  };

  const handleEdit = async (id) => {
    const newTitle = prompt('Enter new title:');
    const newDesc = prompt('Enter new description:');
    if (!newTitle && !newDesc) return;
    try {
      const updates = {};
      if (newTitle) updates.title = newTitle;
      if (newDesc) updates.description = newDesc;
      const res = await recipeApi.update(id, updates);
      setRecipes(prev => prev.map(r => r.id === res.recipe.id ? res.recipe : r));
      setMsg('Recipe updated');
    } catch (err) {
      setMsg(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this recipe?')) return;
    try {
      await recipeApi.delete(id);
      setRecipes(prev => prev.filter(r => r.id !== id));
      setMsg('Recipe deleted');
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="admin-recipes">
      <div className="admin-header">
        <h1>Admin Recipes</h1>
        <div>
          <button className="btn btn-primary" onClick={() => { setMsg(''); }}>Refresh</button>
        </div>
      </div>

      <div className="recipe-form-container">
        <h2>Create Recipe</h2>
        <form onSubmit={handleCreate} className="recipe-form">
          <div className="form-group">
            <label>Title</label>
            <input className="form-input" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input className="form-input" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL (optional)" />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
          </div>

          <div className="form-actions">
            <button className="btn btn-success" type="submit">Create Recipe</button>
            <button type="button" className="btn btn-secondary" onClick={() => { setTitle(''); setImage(''); setDescription(''); }}>Clear</button>
          </div>
        </form>
      </div>

      {msg && <p className="alert alert-success">{msg}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipes-grid">
          {recipes.length === 0 ? (
            <div className="no-recipes">No recipes yet.</div>
          ) : recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                {recipe.image ? <img src={recipe.image} alt={recipe.title} /> : null}
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-actions">
                  <button className="btn btn-edit" onClick={() => handleEdit(recipe.id)}>Edit</button>
                  <button className="btn btn-delete" onClick={() => handleDelete(recipe.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminRecipe;