//Select one db to work with:

//For SQL
// const db = require('../../db/sql');
// //For Mongo
// const mongoDb = require('../../db/mongodb')



// var qFaves = `SELECT * FROM favorites`;

// var dFaves = `DELETE FROM favorites WHERE title= ?`;

// var sfaves = `INSERT INTO favorites (details, year, title, rating) VALUES ?`

// module.exports = {

//   get: function(callback) {
//     db.query(qFaves, function(err, results) {
//     if (err) {
//       console.log(err)
//     } else {
//       callback(results);
//     }
//   })},


//   delete: function(movie, callback) {
//     var deletedMovie = [movie]
//     db.query(dFaves, deletedmovie, function(err, results) {
//       if (err) {
//         console.log(err)
//       } else {
//         callback(results);
//       }
//     })
//   },


//   save: function(movie, callback) {
//     var savedMovie = [movie]
//     db.query(sFaves, savedMovie, function(err, results) {
//       if (err) {
//         console.log(err)
//       } else {
//         callback(results);
//       }
//     })
//   }



// }