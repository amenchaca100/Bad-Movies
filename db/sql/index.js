const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

var favoriteMovies = `create table if not exists favorites(
  details varchar(255),
  year int,
  title varchar(255)not null,
  rating float
)`;


connection.query(favoriteMovies, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('successfully created favorite movies table')
  }
});

var db = connection;

module.exports.db = db;
