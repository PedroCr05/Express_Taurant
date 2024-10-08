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
        price: 10.5,
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
          `Cholesterol 0 mg`,
        ],
        credits: [
          `name, price, & image by: https://www.mangialapastaatx.com`,
          `vegan, gluten, ingredients, recipe(needs & directions), tips, & nutrition per serving by: Adam Gallagher | Blog -> https://www.inspiredtaste.net/24102/fresh-tomato-bruschetta-recipe/`,
        ],
      },
      {
        name: `Deviled Eggs`,
        price: `test`,
        image: `link`,
        isVegan: false,
        isGlutenFree: false,
        ingredients: [
          `Eggs`,
          `Mayonnaise`,
          `White vinegar / White wine vinegar / Lemon Juice`,
          `Yellow Mustard`,
          `Salt & Pepper`,
        ],
        recipeVariations: [
          `Classic`,
          [`Smoked paprika, sweet paprika, or a sprinkle of flaky sea salt`],
          `Spicy`,
          []
        ],
        recipeNeeds: [
          `6 large eggs`,
          `1/4 cup mayonnaise`,
          `1 teaspoon white vinegar, white wine vinegar or lemon juice`,
          `1/2 teaspoon yellow mustard`,
          `Salt and fresh ground black pepper`,
        ],
        recipeDirections:
        {
            cookedEggs: [
            `Place the eggs in a single layer in a saucepan and cover with cold water by 1 ½ inches. Heat over high heat until the water comes to a rolling boil, cover the saucepan with a lid, cook for 30 seconds then remove completely from the heat and let stand for 12 minutes. (This can range from 12 to 14 minutes, depending on the size of your eggs).`,
            `Prepare a bowl of ice water. Transfer eggs with a slotted spoon to the ice water and leave for 5 minutes. Crack egg shells and carefully peel them away. If the shells are not easily peeling away from the eggs, place them back into the ice water and try again in 5 minutes.`
          ],
            deviledEggs:[
            `Gently dry eggs then slice in half, lengthwise. Remove the yolks and add to a medium bowl then arrange the whites on a serving platter.`,
            `Mash the yolks into a fine, powdery paste. Stir in the mayonnaise, vinegar, and mustard. Season with salt and a few grinds of black pepper. Stir vigorously until smooth.`,
            `Use a small cookie scoop or spoon to evenly distribute the egg yolk filling into the egg whites. (You can also cut a corner from a resealable plastic bag, add the egg yolk filling then use it to pipe into the egg white halves).`,
            `Finish with a sprinkle of paprika (classic) or with your favorite toppings (see below for suggestions). We personally like a sprinkle of flaky sea salt or a squirt of Sriracha.`
          ]
        },
        ingredientsTips: `Optional toppings and ingredients: flaky sea salt, smoked or sweet paprika, cooked bacon, pickles, pickled jalapeños, pickled onions, Sriracha, crumbled feta cheese, or fresh herbs — chives or parsley are nice.`,
        nutritionPerServing: [
          `Serving Size 1 deviled egg half`,
          `Calories 67`,
          `Protein 3 g`,
          `Carbohydrate 0 g`,
          `Dietary Fiber 0 g`,
          `Total Sugars 0 g`,
          `Total Fat 6 g`,
          `Saturated Fat 1 g`,
          `Cholesterol 94 mg`,
          `Sodium 91 mg`,
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