# 🍳 Recipe Finder App

A full-stack web application for discovering, creating, and managing recipes. Built with React (Vite) with local storage backend for data persistence.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open browser:**
```
http://localhost:5173
```

## ⭐ Features

### User Features
- 📝 User registration and login with localStorage
- 🔍 Browse and search recipes
- ❤️ Like/unlike recipes
- 💾 Save favorite recipes for later
- 🎥 Watch recipe video tutorials
- 📱 Fully responsive design

### Admin Features
- ➕ Create new recipes
- ✏️ Edit existing recipes
- 🗑️ Delete recipes
- 📋 Manage recipe collection

### Local Storage Features
- ✅ Complete CRUD operations for recipes
- 🔐 User authentication with local storage
- 🔍 Search functionality
- 📊 Like and save tracking
- 💾 Persistent data across browser sessions

## 📂 Project Structure

```
JK-app/
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── README.md                # Project documentation
│
├── public/
│   └── _redirects          # SPA routing configuration
│
└── src/
    ├── App.jsx             # Main application
    ├── main.jsx            # React entry point
    ├── services/
    │   └── api.js          # Local storage API layer
    ├── context/
    │   └── AuthContext.jsx # Authentication state
    ├── styles/
    │   ├── Auth.css        
    │   ├── Recipe.css      
    │   └── AdminRecipe.css 
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Recipe.jsx
    │   ├── AdminRecipe.jsx
    │   └── SavedRecipes.jsx
    └── data/
        └── recipes.js      # Mock recipe data
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start frontend dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Deployment
npm run deploy          # Deploy to GitHub Pages
```

## 🎯 Test Credentials

Default test account (hardcoded):
```
Email: test@example.com
Password: password123
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **LocalStorage** - Data persistence
- **CSS3** - Styling with flexbox & grid

## 💾 Data Storage

Data is stored in browser's localStorage:
- **recipes** - Recipe collection
- **users** - User accounts
- **authToken** - User authentication token
- **user** - Current logged-in user info
- **likedRecipes** - Array of liked recipe IDs
- **savedRecipes** - Array of saved recipes

## 🔐 Authentication Flow

1. User registers with email and password
2. User credentials stored in localStorage
3. Authentication token created and stored
4. User logged in and redirected to recipes page
5. Can logout to clear auth data

## 🎨 UI Features

✨ **Login & Register Pages**
- Modern gradient design
- Real-time error messages
- Password visibility toggle
- Smooth animations

✨ **Recipe Discovery**
- Grid layout with hover effects
- Like and save quick actions
- Modal for detailed recipe view
- Live search with recipe count

✨ **Admin Panel**
- Add/edit recipe form with validation
- Recipe card grid display
- Quick edit and delete buttons
- Success/error notifications

## 📝 How to Add Recipes

1. Navigate to `/admin-recipes`
2. Click "+ Add New Recipe" button
3. Fill in the form:
   - Recipe Title (required)
   - Description (required)
   - Image URL (required)
   - Ingredients (comma-separated)
   - Video Link (optional)
4. Click "Create Recipe"
5. Recipe is saved to localStorage and persists

## 🚨 Important Notes

### Data Persistence
- All data is stored in browser's localStorage
- Data persists across browser sessions
- Clearing browser cache will reset data
- Each browser/device has its own data

### Limitations
- No server-side backup
- No database
- No multi-device sync
- Max ~5MB storage (depends on browser)

### Getting Started Tips
- Try the test account first
- Create a few recipes to test
- Use search and filter features
- Like and save your favorites
- Edit/delete recipes from admin panel

## 🤝 Future Enhancements

Consider adding when you add a backend:
1. Real user authentication
2. Database for persistent storage
3. User profiles and preferences
4. Social features (share, follow)
5. Recipe ratings and reviews
6. Meal planning features
7. Multi-device sync
8. Image upload to server

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built for A2Z Recipe Finder App

---

**Happy Cooking! 🍳 Enjoy discovering amazing recipes!**
