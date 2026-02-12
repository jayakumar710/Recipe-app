// API Service - Using Local Storage (No Backend Required)
// All data is stored in localStorage

import recipesData from '../data/recipes';

// Initialize local storage with mock data
const initializeData = () => {
  if (!localStorage.getItem('recipes')) {
    localStorage.setItem('recipes', JSON.stringify(recipesData));
  }
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
      { id: 1, email: 'test@example.com', password: 'password123', name: 'Test User' }
    ]));
  }
};

initializeData();

// ===== AUTHENTICATION ENDPOINTS =====

export const authApi = {
  // Register new user
  register: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          
          // Check if user already exists
          if (users.find(u => u.email === email)) {
            reject(new Error('User already exists'));
            return;
          }

          // Create new user
          const newUser = {
            id: Math.max(...users.map(u => u.id), 0) + 1,
            email,
            password,
            name: email.split('@')[0],
          };

          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          // Create token
          const token = btoa(JSON.stringify({ id: newUser.id, email: newUser.email }));
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify({ id: newUser.id, email: newUser.email, name: newUser.name }));

          resolve({
            message: 'User registered successfully',
            token,
            user: { id: newUser.id, email: newUser.email, name: newUser.name },
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Login user
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          
          // Find user
          const user = users.find(u => u.email === email && u.password === password);
          if (!user) {
            reject(new Error('Invalid email or password'));
            return;
          }

          // Create token
          const token = btoa(JSON.stringify({ id: user.id, email: user.email }));
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email, name: user.name }));

          resolve({
            message: 'Login successful',
            token,
            user: { id: user.id, email: user.email, name: user.name },
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
  // Update current user (frontend/localStorage)
  updateCurrentUser: async (updates) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const user = JSON.parse(localStorage.getItem('user') || 'null');
          if (!user) {
            reject(new Error('No authenticated user'));
            return;
          }

          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const idx = users.findIndex(u => u.id === user.id);
          if (idx === -1) {
            reject(new Error('User not found'));
            return;
          }

          users[idx] = { ...users[idx], ...updates };
          localStorage.setItem('users', JSON.stringify(users));

          const updated = { id: users[idx].id, email: users[idx].email, name: users[idx].name };
          localStorage.setItem('user', JSON.stringify(updated));

          resolve({ message: 'User updated', user: updated });
        } catch (error) {
          reject(error);
        }
      }, 400);
    });
  },

  // Delete current user (frontend/localStorage)
  deleteCurrentUser: async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const user = JSON.parse(localStorage.getItem('user') || 'null');
          if (!user) {
            reject(new Error('No authenticated user'));
            return;
          }

          let users = JSON.parse(localStorage.getItem('users') || '[]');
          users = users.filter(u => u.id !== user.id);
          localStorage.setItem('users', JSON.stringify(users));

          // Clear auth
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');

          resolve({ message: 'User deleted' });
        } catch (error) {
          reject(error);
        }
      }, 400);
    });
  },
};

// ===== RECIPE ENDPOINTS =====

export const recipeApi = {
  // Get all recipes
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        resolve(recipes);
      }, 300);
    });
  },

  // Get single recipe by ID
  getById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const recipe = recipes.find(r => r.id === parseInt(id));
        if (!recipe) {
          reject(new Error('Recipe not found'));
        } else {
          resolve(recipe);
        }
      }, 300);
    });
  },

  // Create new recipe
  create: async (recipeData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          
          const newRecipe = {
            id: Math.max(...recipes.map(r => r.id), 0) + 1,
            ...recipeData,
            likes: 0,
            saved: false,
          };

          recipes.push(newRecipe);
          localStorage.setItem('recipes', JSON.stringify(recipes));

          resolve({
            message: 'Recipe created successfully',
            recipe: newRecipe,
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Update recipe
  update: async (id, recipeData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          const index = recipes.findIndex(r => r.id === parseInt(id));
          
          if (index === -1) {
            reject(new Error('Recipe not found'));
            return;
          }

          recipes[index] = { ...recipes[index], ...recipeData };
          localStorage.setItem('recipes', JSON.stringify(recipes));

          resolve({
            message: 'Recipe updated successfully',
            recipe: recipes[index],
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Delete recipe
  delete: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          const index = recipes.findIndex(r => r.id === parseInt(id));
          
          if (index === -1) {
            reject(new Error('Recipe not found'));
            return;
          }

          const deleted = recipes.splice(index, 1)[0];
          localStorage.setItem('recipes', JSON.stringify(recipes));

          resolve({
            message: 'Recipe deleted successfully',
            recipe: deleted,
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Search recipes
  search: async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        
        if (!query) {
          resolve(recipes);
          return;
        }

        const results = recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase())
        );

        resolve(results);
      }, 300);
    });
  },

  // Like recipe
  likeRecipe: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          const recipe = recipes.find(r => r.id === parseInt(id));
          
          if (!recipe) {
            reject(new Error('Recipe not found'));
            return;
          }

          recipe.likes = (recipe.likes || 0) + 1;
          localStorage.setItem('recipes', JSON.stringify(recipes));

          resolve({
            message: 'Recipe liked successfully',
            recipe,
          });
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },

  // Save recipe
  saveRecipe: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          const recipe = recipes.find(r => r.id === parseInt(id));
          
          if (!recipe) {
            reject(new Error('Recipe not found'));
            return;
          }

          recipe.saved = true;
          localStorage.setItem('recipes', JSON.stringify(recipes));

          resolve({
            message: 'Recipe saved successfully',
            recipe,
          });
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },

  // Get saved recipes
  getSavedRecipes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const saved = recipes.filter(r => r.saved);
        resolve(saved);
      }, 300);
    });
  },
};

// Helper function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};
