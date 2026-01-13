const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg',
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    ingredients: ['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan cheese', 'Black pepper'],
    videoLink: 'https://www.youtube.com/watch?v=VcxDN3bkuy0',
    likes: 0,
    saved: false
  },
  {
    id: 2,
    title: 'Chicken Curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzD4VzaxSG2VMrAqOZ3cec6xSYcSf08qyw&s',
    description: 'A flavorful Indian curry with tender chicken and aromatic spices.',
    ingredients: ['500g chicken', '2 onions', '2 tomatoes', 'Spices (cumin, coriander, turmeric)', 'Coconut milk'],
    videoLink: 'https://www.youtube.com/watch?v=j3pypgNdaMc',
    likes: 0,
    saved: false
  },
  {
    id: 3,
    title: 'Chocolate Cake',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jWA0VaTu_McECyx9xloy_Socgev8HoIag&s',
    description: 'Rich and moist chocolate cake perfect for dessert.',
    ingredients: ['200g flour', '200g sugar', '100g cocoa powder', '2 eggs', 'Milk'],
    videoLink: 'https://www.youtube.com/watch?v=_ZnH8eiJbPo',
    likes: 0,
    saved: false
  },
  {
    id: 4,
    title: 'Beef Stir Fry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuooZfELc0XBRr52EU6IZWY8I_5WGJovaEQ&s',
    description: 'Quick and easy beef stir fry with vegetables.',
    ingredients: ['300g beef', '1 bell pepper', '1 carrot', 'Soy sauce', 'Garlic'],
    videoLink: 'https://www.youtube.com/watch?v=eFwUwzXdazg',
    likes: 0,
    saved: false
  },
  {
    id: 5,
    title: 'Vegetable Soup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS3NYAZRy6CFK8qsTZBlcEIhJb4tCJvrsrQ&s',
    description: 'Healthy vegetable soup loaded with nutrients.',
    ingredients: ['Carrots', 'Celery', 'Onions', 'Tomatoes', 'Broth'],
    videoLink: 'https://www.youtube.com/watch?v=-0dxNuuk3W4',
    likes: 0,
    saved: false
  },
  {
    id: 6,
    title: 'Grilled Salmon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1BBovn0Ea0nW-fDMZ4XxdPNPWuEYKit_9Q&s',
    description: 'Delicious grilled salmon with lemon and herbs.',
    ingredients: ['Salmon fillet', 'Lemon', 'Olive oil', 'Herbs', 'Salt'],
    videoLink: 'https://www.youtube.com/watch?v=KhvlLNJUpZI',
    likes: 0,
    saved: false
  },
  {
    id: 7,
    title: 'Pancakes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhoBRgSZTf8FLaB6EbrPmInwPQ7okUC9VAA&s',
    description: 'Fluffy pancakes for breakfast.',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Butter'],
    videoLink: 'https://www.youtube.com/watch?v=4r7Yl15-F7c',
    likes: 0,
    saved: false
  },
  {
    id: 8,
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1746211224437-8340316b288d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic Caesar salad with croutons and dressing.',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan', 'Caesar dressing', 'Anchovies'],
    videoLink: 'https://www.youtube.com/watch?v=ta62syygWO8',
    likes: 0,
    saved: false
  },
  {
    id: 9,
    title: 'Lasagna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLvVkaqKIOQNHrgiRhzN5eZPlnZFUV10Mbw&s',
    description: 'Layered pasta dish with meat sauce and cheese.',
    ingredients: ['Lasagna noodles', 'Ground beef', 'Tomato sauce', 'Ricotta', 'Mozzarella'],
    videoLink: 'https://www.youtube.com/watch?v=l1Q-zzCgCwY',
    likes: 0,
    saved: false
  },
  {
    id: 10,
    title: 'Tacos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Utp9kpMm5POMozhdDMffMAIFrRTxvEk7w&s',
    description: 'Mexican tacos with seasoned meat and toppings.',
    ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
    videoLink: 'https://www.youtube.com/watch?v=zMkbeLNiOHk',
    likes: 0,
    saved: false
  },
  {
    id: 11,
    title: "Chicken Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafqoYv-LNBDU803_1eui7Xy9PmyFh9BOuLw&s",
    description: "Aromatic rice with spiced chicken.",
    ingredients: ["Rice", "Chicken", "Spices", "Yogurt"],
    videoLink: "https://www.youtube.com/watch?v=v56ISWrU7ow",
    likes: 0,
    saved: false
  },
  {
    id: 12,
    title: "Tacos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Utp9kpMm5POMozhdDMffMAIFrRTxvEk7w&s",
    description: "Mexican-style beef tacos.",
    ingredients: ["Tortilla", "Beef", "Cheese", "Lettuce"],
    videoLink: "https://www.youtube.com/watch?v=zMkbeLNiOHk",
    likes: 0,
    saved: false
  },
  {
    id: 13,
    title: "Sushi Rolls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfV7iV6CZBb5VR_92P5pFHdcbtsNv8ABAKg&s",
    description: "Fresh homemade sushi rolls.",
    ingredients: ["Rice", "Seaweed", "Fish", "Cucumber"],
    videoLink: "https://www.youtube.com/watch?v=WJ_U71a5t-M",
    likes: 0,
    saved: false
  },
  {
    id: 14,
    title: "Chocolate Cake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aOqYoG7-hKRlC6XPy_k9cDzoE3xDZbun8g&s",
    description: "Rich and moist chocolate cake.",
    ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar"],
    videoLink: "https://www.youtube.com/watch?v=_ZnH8eiJbPo",
    likes: 0,
    saved: false
  },
  {
    id: 15,
    title: "Caesar Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6emBs4NVbYfIJX66wa5MOq6d-2IOzXj2JA&s",
    description: "Classic Caesar salad.",
    ingredients: ["Lettuce", "Croutons", "Cheese", "Dressing"],
    videoLink: "https://www.youtube.com/watch?v=ta62syygWO8",
    likes: 0,
    saved: false
  },

  {
    id: 16,
    title: "Omelette",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJsCDxNF0x3sOX_W4AG4s_yLYgCN4d65A5A&s",
    description: "Simple egg omelette.",
    ingredients: ["Eggs", "Salt", "Pepper", "Butter"],
    videoLink: "https://www.youtube.com/watch?v=fqqwFWqxUr4",
    likes: 0,
    saved: false
  },
  {
    id: 17,
    title: "Fish Fry",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/05/shutterstock_1116124928.jpg",
    description: "Crispy fried fish.",
    ingredients: ["Fish", "Flour", "Spices", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=9sTnNQLrT1Q",
    likes: 0,
    saved: false
  },
  {
    id: 18,
    title: "Mashed Potatoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai2CZjxt-BwDfewQ5eEv1Z81raxv13vCllA&s",
    description: "Creamy mashed potatoes.",
    ingredients: ["Potatoes", "Butter", "Milk"],
    videoLink: "https://www.youtube.com/watch?v=HfdFlenF6XI",
    likes: 0,
    saved: false
  },
  {
    id: 19,
    title: "Hot Dog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRb03xtsz6jbohWNcc-KJjSzlLA7UAXLEQuA&s",
    description: "Classic street-style hot dog.",
    ingredients: ["Sausage", "Bun", "Mustard"],
    videoLink: "https://www.youtube.com/watch?v=6Tb5HDBEv48",
    likes: 0,
    saved: false
  },
  {
    id: 20,
    title: "Ice Cream Sundae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BdMSAEOBqI8ErYOM-pvMaDRW448ilKoCQ&s",
    description: "Sweet ice cream dessert.",
    ingredients: ["Ice cream", "Chocolate syrup", "Nuts"],
    videoLink: "https://www.youtube.com/watch?v=LIyqtK0ZuSs",
    likes: 0,
    saved: false
  },

  {
    id: 21,
    title: "Chicken Wrap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyyU69SqvjQI7_SJk_qqe21evSyTkXvNnuA&s",
    description: "Grilled chicken wrap.",
    ingredients: ["Wrap bread", "Chicken", "Sauce"],
    videoLink: "https://www.youtube.com/watch?v=yJND8r2ZExg",
    likes: 0,
    saved: false
  },
  {
    id: 22,
    title: "Fruit Salad",
    image: "https://tastefullygrace.com/wp-content/uploads/2025/05/Fruit-Salad-Recipe-1-scaled.jpg",
    description: "Fresh mixed fruit salad.",
    ingredients: ["Apple", "Banana", "Orange", "Grapes"],
    videoLink: "https://www.youtube.com/shorts/AI6DZITNzO0",
    likes: 0,
    saved: false
  },
  {
    id: 23,
    title: "Lasagna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDkEvdbSBxGy8LoHVNN3NPtowZMIf0S0OFg&s",
    description: "Layered pasta with cheese.",
    ingredients: ["Lasagna sheets", "Cheese", "Meat sauce"],
    videoLink: "https://www.youtube.com/watch?v=l1Q-zzCgCwY",
    likes: 0,
    saved: false
  },
  {
    id: 24,
    title: "Chicken Nuggets",
    image: "https://www.allrecipes.com/thmb/Dw_WFOvCds43ksPxkrE60qxcwSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-8849-HomemadeChickenNuggets-beauty-4x3-ca915ee936054272af1b506181923c7f.jpg",
    description: "Crunchy chicken nuggets.",
    ingredients: ["Chicken", "Breadcrumbs", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=FjB3ho9GIAM",
    likes: 0,
    saved: false
  },
  {
    id: 25,
    title: "Veg Sandwich",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupWyqhVXXY2kyIekR_lDFk2UloOTq3xgfuA&s",
    description: "Healthy vegetable sandwich.",
    ingredients: ["Bread", "Tomato", "Cucumber", "Cheese"],
    videoLink: "https://www.youtube.com/watch?v=kxyV7Ln_KRE",
    likes: 0,
    saved: false
  },

  {
    id: 26,
    title: "Ramen Noodles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQXX1VDlNSQ2aTJkPQy1xnEystz2-WLIFXg&s",
    description: "Hot and spicy ramen noodles.",
    ingredients: ["Noodles", "Broth", "Egg"],
    videoLink: "https://www.youtube.com/watch?v=7z1Ygygfquw",
    likes: 0,
    saved: false
  },
  {
    id: 27,
    title: "Chicken Shawarma",
    image: "https://www.closetcooking.com/wp-content/uploads/2021/09/Roast-Chicken-Gyros-1200-4547.jpg",
    description: "Middle Eastern chicken shawarma.",
    ingredients: ["Chicken", "Wrap", "Garlic sauce"],
    videoLink: "https://www.youtube.com/watch?v=yIIwKCK6N-c&vl=en",
    likes: 0,
    saved: false
  },
  {
    id: 28,
    title: "Dosa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s",
    description: "South Indian crispy dosa.",
    ingredients: ["Rice batter", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=UoyzsT0EXHA",
    likes: 0,
    saved: false
  },
  {
    id: 29,
    title: "Idli Sambar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreO5YsqUS2gD5eAjv3KtF35i0drI4hVFegg&s",
    description: "Soft idlis with sambar.",
    ingredients: ["Idli batter", "Lentils", "Vegetables"],
    videoLink: "https://www.youtube.com/shorts/4XsqiXHz11c",
    likes: 0,
    saved: false
  },
  {
    id: 30,
    title: "Pasta Alfredo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqy9hzvU2R6-8278COnWuaoo6ZQctdaz74g&s",
    description: "Creamy Alfredo pasta.",
    ingredients: ["Pasta", "Cream", "Cheese"],
    videoLink: "https://www.youtube.com/watch?v=zwUIRMTO4N4",
    likes: 0,
    saved: false
  },
  {
    id: 31,
    title: 'Spaghetti Carbonara',
    image: 'https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg',
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    ingredients: ['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan cheese', 'Black pepper'],
    videoLink: 'https://www.youtube.com/watch?v=VcxDN3bkuy0',
    likes: 0,
    saved: false
  },
  {
    id: 32,
    title: 'Chicken Curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzD4VzaxSG2VMrAqOZ3cec6xSYcSf08qyw&s',
    description: 'A flavorful Indian curry with tender chicken and aromatic spices.',
    ingredients: ['500g chicken', '2 onions', '2 tomatoes', 'Spices (cumin, coriander, turmeric)', 'Coconut milk'],
    videoLink: 'https://www.youtube.com/watch?v=j3pypgNdaMc',
    likes: 0,
    saved: false
  },
  {
    id: 33,
    title: 'Chocolate Cake',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jWA0VaTu_McECyx9xloy_Socgev8HoIag&s',
    description: 'Rich and moist chocolate cake perfect for dessert.',
    ingredients: ['200g flour', '200g sugar', '100g cocoa powder', '2 eggs', 'Milk'],
    videoLink: 'https://www.youtube.com/watch?v=_ZnH8eiJbPo',
    likes: 0,
    saved: false
  },
  {
    id: 34,
    title: 'Beef Stir Fry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuooZfELc0XBRr52EU6IZWY8I_5WGJovaEQ&s',
    description: 'Quick and easy beef stir fry with vegetables.',
    ingredients: ['300g beef', '1 bell pepper', '1 carrot', 'Soy sauce', 'Garlic'],
    videoLink: 'https://www.youtube.com/watch?v=eFwUwzXdazg',
    likes: 0,
    saved: false
  },
  {
    id: 35,
    title: 'Vegetable Soup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS3NYAZRy6CFK8qsTZBlcEIhJb4tCJvrsrQ&s',
    description: 'Healthy vegetable soup loaded with nutrients.',
    ingredients: ['Carrots', 'Celery', 'Onions', 'Tomatoes', 'Broth'],
    videoLink: 'https://www.youtube.com/watch?v=-0dxNuuk3W4',
    likes: 0,
    saved: false
  },
  {
    id: 36,
    title: 'Grilled Salmon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1BBovn0Ea0nW-fDMZ4XxdPNPWuEYKit_9Q&s',
    description: 'Delicious grilled salmon with lemon and herbs.',
    ingredients: ['Salmon fillet', 'Lemon', 'Olive oil', 'Herbs', 'Salt'],
    videoLink: 'https://www.youtube.com/watch?v=KhvlLNJUpZI',
    likes: 0,
    saved: false
  },
  {
    id: 37,
    title: 'Pancakes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhoBRgSZTf8FLaB6EbrPmInwPQ7okUC9VAA&s',
    description: 'Fluffy pancakes for breakfast.',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Butter'],
    videoLink: 'https://www.youtube.com/watch?v=4r7Yl15-F7c',
    likes: 0,
    saved: false
  },
  {
    id: 38,
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1746211224437-8340316b288d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic Caesar salad with croutons and dressing.',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan', 'Caesar dressing', 'Anchovies'],
    videoLink: 'https://www.youtube.com/watch?v=ta62syygWO8',
    likes: 0,
    saved: false
  },
  {
    id: 39,
    title: 'Lasagna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLvVkaqKIOQNHrgiRhzN5eZPlnZFUV10Mbw&s',
    description: 'Layered pasta dish with meat sauce and cheese.',
    ingredients: ['Lasagna noodles', 'Ground beef', 'Tomato sauce', 'Ricotta', 'Mozzarella'],
    videoLink: 'https://www.youtube.com/watch?v=l1Q-zzCgCwY',
    likes: 0,
    saved: false
  },
  {
    id: 40,
    title: 'Tacos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Utp9kpMm5POMozhdDMffMAIFrRTxvEk7w&s',
    description: 'Mexican tacos with seasoned meat and toppings.',
    ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
    videoLink: 'https://www.youtube.com/watch?v=zMkbeLNiOHk',
    likes: 0,
    saved: false
  },
  {
    id: 41,
    title: "Chicken Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafqoYv-LNBDU803_1eui7Xy9PmyFh9BOuLw&s",
    description: "Aromatic rice with spiced chicken.",
    ingredients: ["Rice", "Chicken", "Spices", "Yogurt"],
    videoLink: "https://www.youtube.com/watch?v=v56ISWrU7ow",
    likes: 0,
    saved: false
  },
  {
    id: 42,
    title: "Tacos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Utp9kpMm5POMozhdDMffMAIFrRTxvEk7w&s",
    description: "Mexican-style beef tacos.",
    ingredients: ["Tortilla", "Beef", "Cheese", "Lettuce"],
    videoLink: "https://www.youtube.com/watch?v=zMkbeLNiOHk",
    likes: 0,
    saved: false
  },
  {
    id: 43,
    title: "Sushi Rolls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfV7iV6CZBb5VR_92P5pFHdcbtsNv8ABAKg&s",
    description: "Fresh homemade sushi rolls.",
    ingredients: ["Rice", "Seaweed", "Fish", "Cucumber"],
    videoLink: "https://www.youtube.com/watch?v=WJ_U71a5t-M",
    likes: 0,
    saved: false
  },
  {
    id: 44,
    title: "Chocolate Cake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aOqYoG7-hKRlC6XPy_k9cDzoE3xDZbun8g&s",
    description: "Rich and moist chocolate cake.",
    ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar"],
    videoLink: "https://www.youtube.com/watch?v=_ZnH8eiJbPo",
    likes: 0,
    saved: false
  },
  {
    id: 45,
    title: "Caesar Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6emBs4NVbYfIJX66wa5MOq6d-2IOzXj2JA&s",
    description: "Classic Caesar salad.",
    ingredients: ["Lettuce", "Croutons", "Cheese", "Dressing"],
    videoLink: "https://www.youtube.com/watch?v=ta62syygWO8",
    likes: 0,
    saved: false
  },

  {
    id: 46,
    title: "Omelette",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJsCDxNF0x3sOX_W4AG4s_yLYgCN4d65A5A&s",
    description: "Simple egg omelette.",
    ingredients: ["Eggs", "Salt", "Pepper", "Butter"],
    videoLink: "https://www.youtube.com/watch?v=fqqwFWqxUr4",
    likes: 0,
    saved: false
  },
  {
    id: 47,
    title: "Fish Fry",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/05/shutterstock_1116124928.jpg",
    description: "Crispy fried fish.",
    ingredients: ["Fish", "Flour", "Spices", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=9sTnNQLrT1Q",
    likes: 0,
    saved: false
  },
  {
    id: 48,
    title: "Mashed Potatoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai2CZjxt-BwDfewQ5eEv1Z81raxv13vCllA&s",
    description: "Creamy mashed potatoes.",
    ingredients: ["Potatoes", "Butter", "Milk"],
    videoLink: "https://www.youtube.com/watch?v=HfdFlenF6XI",
    likes: 0,
    saved: false
  },
  {
    id: 49,
    title: "Hot Dog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRb03xtsz6jbohWNcc-KJjSzlLA7UAXLEQuA&s",
    description: "Classic street-style hot dog.",
    ingredients: ["Sausage", "Bun", "Mustard"],
    videoLink: "https://www.youtube.com/watch?v=6Tb5HDBEv48",
    likes: 0,
    saved: false
  },
  {
    id: 50,
    title: "Ice Cream Sundae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BdMSAEOBqI8ErYOM-pvMaDRW448ilKoCQ&s",
    description: "Sweet ice cream dessert.",
    ingredients: ["Ice cream", "Chocolate syrup", "Nuts"],
    videoLink: "https://www.youtube.com/watch?v=LIyqtK0ZuSs",
    likes: 0,
    saved: false
  },

  {
    id: 51,
    title: "Chicken Wrap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyyU69SqvjQI7_SJk_qqe21evSyTkXvNnuA&s",
    description: "Grilled chicken wrap.",
    ingredients: ["Wrap bread", "Chicken", "Sauce"],
    videoLink: "https://www.youtube.com/watch?v=yJND8r2ZExg",
    likes: 0,
    saved: false
  },
  {
    id: 52,
    title: "Fruit Salad",
    image: "https://tastefullygrace.com/wp-content/uploads/2025/05/Fruit-Salad-Recipe-1-scaled.jpg",
    description: "Fresh mixed fruit salad.",
    ingredients: ["Apple", "Banana", "Orange", "Grapes"],
    videoLink: "https://www.youtube.com/shorts/AI6DZITNzO0",
    likes: 0,
    saved: false
  },
  {
    id: 53,
    title: "Lasagna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDkEvdbSBxGy8LoHVNN3NPtowZMIf0S0OFg&s",
    description: "Layered pasta with cheese.",
    ingredients: ["Lasagna sheets", "Cheese", "Meat sauce"],
    videoLink: "https://www.youtube.com/watch?v=l1Q-zzCgCwY",
    likes: 0,
    saved: false
  },
  {
    id: 54,
    title: "Chicken Nuggets",
    image: "https://www.allrecipes.com/thmb/Dw_WFOvCds43ksPxkrE60qxcwSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-8849-HomemadeChickenNuggets-beauty-4x3-ca915ee936054272af1b506181923c7f.jpg",
    description: "Crunchy chicken nuggets.",
    ingredients: ["Chicken", "Breadcrumbs", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=FjB3ho9GIAM",
    likes: 0,
    saved: false
  },
  {
    id: 55,
    title: "Veg Sandwich",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupWyqhVXXY2kyIekR_lDFk2UloOTq3xgfuA&s",
    description: "Healthy vegetable sandwich.",
    ingredients: ["Bread", "Tomato", "Cucumber", "Cheese"],
    videoLink: "https://www.youtube.com/watch?v=kxyV7Ln_KRE",
    likes: 0,
    saved: false
  },

  {
    id: 56,
    title: "Ramen Noodles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQXX1VDlNSQ2aTJkPQy1xnEystz2-WLIFXg&s",
    description: "Hot and spicy ramen noodles.",
    ingredients: ["Noodles", "Broth", "Egg"],
    videoLink: "https://www.youtube.com/watch?v=7z1Ygygfquw",
    likes: 0,
    saved: false
  },
  {
    id: 57,
    title: "Chicken Shawarma",
    image: "https://www.closetcooking.com/wp-content/uploads/2021/09/Roast-Chicken-Gyros-1200-4547.jpg",
    description: "Middle Eastern chicken shawarma.",
    ingredients: ["Chicken", "Wrap", "Garlic sauce"],
    videoLink: "https://www.youtube.com/watch?v=yIIwKCK6N-c&vl=en",
    likes: 0,
    saved: false
  },
  {
    id: 58,
    title: "Dosa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s",
    description: "South Indian crispy dosa.",
    ingredients: ["Rice batter", "Oil"],
    videoLink: "https://www.youtube.com/watch?v=UoyzsT0EXHA",
    likes: 0,
    saved: false
  },
  {
    id: 59,
    title: "Idli Sambar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreO5YsqUS2gD5eAjv3KtF35i0drI4hVFegg&s",
    description: "Soft idlis with sambar.",
    ingredients: ["Idli batter", "Lentils", "Vegetables"],
    videoLink: "https://www.youtube.com/shorts/4XsqiXHz11c",
    likes: 0,
    saved: false
  },
  {
    id: 60,
    title: "Pasta Alfredo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqy9hzvU2R6-8278COnWuaoo6ZQctdaz74g&s",
    description: "Creamy Alfredo pasta.",
    ingredients: ["Pasta", "Cream", "Cheese"],
    videoLink: "https://www.youtube.com/watch?v=zwUIRMTO4N4",
    likes: 0,
    saved: false
  },
 
];

export default recipes;