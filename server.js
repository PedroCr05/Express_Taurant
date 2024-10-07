const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get(`/`, (req, res) => {
    const appetizers = `<a href="http://localhost:3001/appetizers">Click me to begin with appetizers!</a>`;
    const entrees = `<a href="http://localhost:3001/entrees">Click me to begin with the entrees!</a>`;
    const desserts = `<a href="http://localhost:3001/desserts">Click me to begin with our delicious desserts!</a>`;
    
    res.send(`${appetizers}, ${entrees}, ${desserts}`);
})

app.get(`/appetizers`, (req, res) => {
    const appetizers = [
      {
        name: `Tomato Bruschetta`,
        pronunciation: `brew-SKET-tah`,
        price: 10.50,
        image: `https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/peqmrfxi/d5364249-6bd0-495b-9e0f-8f8fc1016e4b.jpg`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`Bread`, `Garlic`, `Tomatoes`, `Olive oil`, `Basil`],
        recipeNeeds: [
          `6 slices Italian or French bread, 1/2-inch-thick`,
          `2 cloves garlic, peeled and left whole`,
          `8 ounces (226g) ripe fresh tomatoes, at room temperature, 3 to 4 medium tomatoes`,
          `2 tablespoons extra virgin olive oil`,
          `6 basil leaves, thinly sliced`,
          `Salt and fresh ground black pepper`,
        ],
        recipeDirections: [
          `Chop the tomatoes into 1/4-inch pieces, then add to a medium bowl with a generous pinch of salt, a small pinch of black pepper, one tablespoon of olive oil, and the basil. Stir and let sit for 10 minutes.`,
          `Meanwhile, heat a grill pan over medium heat or prepare an outdoor grill for medium heat.`,
          `Drizzle the bread slices with the remaining tablespoon of oil and grill for 2 to 3 minutes on each side until warmed through and grill marks appear.`,
          `Rub one side of the warm grilled bread with garlic (two to three strokes per slice should do it), and then place onto a serving plate with the garlic-rubbed side facing up.`,
          `Stir and taste the tomatoes, then add more salt or pepper as needed.`,
          `Spoon a generous amount of tomatoes onto each bread slice. Drizzle a little of the juice remaining at the bottom of the bowl over the tomatoes and enjoy.`,
        ],
        ingredientsTips: [
          `Canned tomatoes: If you cannot access sweet, ripe tomatoes, use high-quality canned whole tomatoes. Reserve the juice for another recipe and chop the whole tomatoes for the bruschetta. We love San Marzano tomatoes and have also been very happy with canned Muir Glen tomatoes.`,
          `Balsamic vinegar: For extra flavor, stir 1 to 2 teaspoons of balsamic vinegar into the tomatoes. Or, after assembling the bruschetta, drizzle over a balsamic glaze.`,
        ],
        nutritionPerServing: [
            `Serving Size 2 bruschetta`,
            `Calories 169`,
            `Protein 4 g`,
            `Carbohydrate 18 g`,
            `Dietary Fiber 2 g`,
            `Total Sugars 3 g`,
            `Total Fat 10 g`,
            `Saturated Fat 1 g`,
            `Cholesterol 0 mg`
        ],
        credits: [
          `name, price, & image by: https://www.mangialapastaatx.com`,
          `vegan, gluten, ingredients, recipe(needs & directions), tips, & nutrition per serving by: Adam Gallagher | Blog -> https://www.inspiredtaste.net/24102/fresh-tomato-bruschetta-recipe/`,
        ],
      },
      {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
      },
      {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
      },
    ];

    res.json(appetizers);
});

app.get(`/entrees`, (req, res) => {
  const entrees = 
    [
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
    ];

    res.json(entrees);
});

app.get(`/desserts`, (req, res) => {
  const desserts = 
    [
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
        {
        name: `test`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [`test`, `test`, `test`],
        recipe: [`test`, `test`, `test`],
        },
    ];

    res.json(desserts);
});

app.get(`/*`, (req, res) => {
  res.send(`404-page-not-found`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});