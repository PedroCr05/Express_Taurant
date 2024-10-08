const appetizers = [
  {
    name: `Deviled Eggs`,
    price: 12.65,
    image: `https://live.staticflickr.com/65535/51758324179_0fc83836ea_b.jpg`,
    isVegan: true,
    isGlutenFree: true,
    ingredients: `eggs`,
  },
  {
    name: `Tomato Bruschetta`,
    price: 5,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8WNd4MqnHa3BSeO_NxHABGbWDkDUZCeI8w&s`,
    isVegan: true,
    isGlutenFree: false,
    ingredients: [`Bread`, `Garlic`, `Tomatoes`, `Olive oil`, `Basil`],
  },
  {
    name: `Bacon Wrapped Jalepeno Poppers`,
    price: 1000,
    image: `https://live.staticflickr.com/8715/28001885574_cfd36d43a7_b.jpg`,
    isVegan: true,
    isGlutenFree: true,
    ingredients: [`Jalapeños`, `Cream Cheese and Chives`, `Bacon`],
  },
];



const getAppetizer = (req, res) => {
  res.send(appetizers);
};

const getAppetizerId = (req, res) => {
    res.send(appetizers[req.params.appetizerId]);
}

module.exports = {
  getAppetizer,
  getAppetizerId
};