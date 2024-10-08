const express = require("express");
const cors = require(`cors`);

const appetizer = require(`./controllers/appetizers`);
const entree = require(`./controllers/entrees`);
const dessert = require(`./controllers/desserts`);

const PORT = process.env.PORT || 3001;

const app = express();

app.get(`/`, (req, res) => {
    const appetizers = `Click me to begin with these <a href="http://localhost:3001/appetizers">appetizers!</a>`;
    const entrees = `Click me to begin with the <a href="http://localhost:3001/entrees">entrees!</a>`;
    const desserts = `Click me to begin with our delicious <a href="http://localhost:3001/desserts">desserts!</a>`;
    
    res.send(`${appetizers}, ${entrees}, ${desserts}`);
})

app.get(`/appetizers`, appetizer.getAppetizer);
app.get(`/appetizers/:appetizerId`, appetizer.getAppetizerId);

app.get(`/entrees`, entree.getEntrees);
app.get(`/entrees/:entreeId`, entree.getEntreesId);

app.get(`/desserts`, dessert.getDessert);
app.get(`/desserts/:dessertId`, dessert.getDessertId)

app.get(`/*`, (req, res) => {
  res.send(`404-page-not-found`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});