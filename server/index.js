var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
const movieController = require('./controllers/movieController.js')
var app = express();

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup

//Helpers
var apiHelpers = require("./helpers/apiHelpers.js");

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + "/../client/dist"));



app.get("/genres", movieController.getGenres);

app.post("/genres", movieController.filterGenres);

app.get("/search", movieController.getSearch);

app.post("/save", movieController.saveMovie);

app.post("/delete", movieController.deleteMovie);


app.listen(3000, function() {
  console.log("listening on port 3000!");
});
