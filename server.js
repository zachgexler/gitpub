require("express");

console.log(require("express"))

const express = require("express");

const app = express();

const drinks = require("./models/drinks.js");

//define routes

// app.get("/", (req, res) => {
//   res.send("ZACH GEXLER")
// })

// app.get("/", (req, res) => {
//     res.send("Welcome To The Gitpub App")
//   })


app.get("/drinks/", (req, res) => {
    // res.send(drinks);
    res.render("drinks_index.ejs");
  })

  app.listen(3000, function () {
    console.log("express is listening for requests from the browser")
})