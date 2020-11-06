const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

//const connection = mysql.createConnection(mysqlConfig);

// var favoriteMovies = `create table if not exists favorites(
//   details varchar(255),
//   year int,
//   title varchar(255)not null,
//   rating float
// )`;


// connection.query(favoriteMovies, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('successfully created favorite movies table')
//   }
// });

// var db = connection;

//module.exports.db = db;

// var {movies} = this.props;

//     return (
//        <ul className="movies">
//       {movies.map((movie) => (
//       <li className="movie_item">
//         <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} />
//         <div className="movie_description">
//           <h2>{movies.overview}</h2>
//           <section className="movie_details">
//             <div className="movie_year">
//               <span className="title">{movie.release_date}</span>
//               <span>2018</span>
//             </div>
//             <div className="movie_rating">
//               <span className="title">{movie.title}</span>
//               <span>{movie.popularity}</span>
//             </div>
//           </section>
//         </div>
//       </li>
//       ))}

//     )