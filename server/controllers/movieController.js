const movieModel = require('../models/movieModel.js');
const {searchURL, genreURL} = require('../helpers/apiHelpers.js');
const axios = require('axios');

//Return requests to the client
module.exports = {

  getSearch: (req, res) => {
    return axios.get(searchURL).then(function(data) {
      res.send(data);
    }).catch(function(err) {
      console.log('failed to search for movies')
    });

  },

  getGenres: (req, res) => {
    console.log('running getGenres');
    return axios.get(genreURL).then(function(response) {
      console.log(response.data)
    res.status(200).send(response.data);
    }).catch(function(err) {
      console.log('failed to get movie genres')
    });

  },

  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}