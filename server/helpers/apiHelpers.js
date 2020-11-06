const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
var searchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

var genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

module.exports.searchURL = searchURL;
module.exports.genreURL = genreURL;


//https://api.themoviedb.org/3/genre/movie/list?api_key=956fad046a62c8a3c41b888f3aaa0edf&language=en-US

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file


// Don't forget to export your functions and require them within your server file

//