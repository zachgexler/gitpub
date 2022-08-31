

const express = require("express");
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")
// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

app.get("/drinks/", (req, res) => {
res.render("drinks_index.ejs", {
  allDrinks: drinks,
})
});

app.get("/food/", (req, res) => {
  res.render("food_index.ejs", {
    allFood: food,
  })
});

app.get("/drinks/:indexOfDrinksArray", (req, res) => {
  res.render('drinks_show.ejs', {
    drink: drinks[req.params.indexOfDrinksArray],
  })
});

app.get("/food/:indexOfFoodArray", (req, res) => {
  res.render('food_show.ejs', {
    food: food[req.params.indexOfFoodArray],
  })
});

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
  console.log(`listening on port `, port)
});