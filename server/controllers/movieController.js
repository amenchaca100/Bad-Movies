const movieModel = require('../models/movieModel.js');
const {searchURL, genreURL} = require('../helpers/apiHelpers.js');
const axios = require('axios');

//Return requests to the client
module.exports = {

  getSearch: (req, res) => {
    console.log('running getSearch')
    console.log(req.query)
    return axios.get(`${searchURL}${req.query.with_genres}`).then(function(response) {
      res.status(200).send(response.data);
    }).catch(function(err) {
      console.log('failed to search for movies')
    });

  },

  filterGenres: (req, res) => {
    console.log('running filterGenres');
    return axios.get(`${genreURL}`).then(function(response) {
      console.log(req.body.id)
    res.status(200).send(response.data);
    }).catch(function(err) {
      console.log('failed to get movie genres')
    });

  },


  getGenres: (req, res) => {
    console.log('running getGenres');
    return axios.get(genreURL).then(function(response) {
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