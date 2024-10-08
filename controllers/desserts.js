const dessert = [
  {
    name: `peach jam`,
    price: 34,
    image: `https://img.bestrecipes.com.au/O98AimGW/w643-h428-cfill-q90/br/2020/01/3-ingredient-bread-maker-peach-jam-recipe-955679-2.jpg`,
    isVegan: false,
    isGlutenFree: false,
    ingredients: [`peaches`, `white sugar`, `jamsetta`],
    },
    {
    name: `Caramilk cheesecake truffles`,
    price: 12,
    image: `https://img.bestrecipes.com.au/6RPv6Tcc/w643-h428-cfill-q90/br/2019/11/3-ingredient-caramilk-cheesecake-truffles-955129-2.jpg`,
    isVegan: false,
    isGlutenFree: true,
    ingredients: [`biscuits`, `caramilk cream cheese spread`, `Cadbury caramilk chocolate`],
    },
    {
    name: `Apple Danish`,
    price: 8,
    image: `https://img.bestrecipes.com.au/jTbXNVMC/w120-h120-cfill-q80/br/2018/09/3-ingredient-apple-danish-recipe-521020-1.jpg`,
    isVegan: true,
    isGlutenFree: false,
    ingredients: [`puff pastry`, `raw caster sugar`, `apple cored peeled`],
  },
];

const getDessert = (req, res) => {
  res.send(dessert);
};

const getDessertId = (req, res) => {
  res.send(dessert[req.params.dessertId]);
};

module.exports = {
  getDessert,
  getDessertId,
};