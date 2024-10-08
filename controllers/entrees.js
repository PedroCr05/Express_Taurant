const entrees = [
  {
    name: `Club`,
    price: 20,
    image: `https://www.mcalistersdeli.com/-/media/mcalisters/comp-images/menu-cards/sandwiches_mca-club_thumbnail-664x440.jpg?v=1&d=20240507T095551Z`,
    isVegan: false,
    isGlutenFree: true,
    ingredients: [
      `Roasted Turkey`,
      `Black Forest Ham`,
      `Bacon`,
      `Sharp Cheddar`,
      `Swiss`,
      `Spring Mix`,
      `Tomato`,
      `Mayo`,
      `Honey Mustard`,
    ],
  },
  {
    name: `Chicken Pot Pie Soup`,
    price: 23120000,
    image: `https://www.mcalistersdeli.com/-/media/mcalisters/menu/soups/chicken-pot-pie/mca_1323370_mca-w3-menu-images-due_chicken-pot-pie-soup-cup_664x440.jpg?v=1&d=20241001T065327Z`,
    isVegan: false,
    isGlutenFree: true,
    ingredients: [
      `chicken`,
      `water`,
      `carrots`,
      `garlic`,
      `cream cheese`,
      ` gnochi-style dumplings`,
    ],
  },
  {
    name: `Jalapeño Turkey Crunch`,
    price: 0.01,
    image: `https://www.mcalistersdeli.com/-/media/mcalisters/comp-images/menu/sandwiches/sandwiches_jalapeno-turkey-crunch_thumbnail-664x440.jpg?v=1&d=20240508T102610Z`,
    isVegan: true,
    isGlutenFree: false,
    ingredients: [`Roasted Turkey`, `Bacon`, `Jalepeno chips`, `Pepper jack`, `avocado`, `mayo`, `pickle spears`],
  },
];

const getEntrees = (req, res) => {
  res.send(entrees);
};

const getEntreesId = (req, res) => {
  res.send(entrees[req.params.entreeId]);
};

module.exports = {
  getEntrees,
  getEntreesId,
};