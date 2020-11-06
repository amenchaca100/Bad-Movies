import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);


  }

  componentDidMount() {
   this.getMovies(16);
  }

  getMovies(id) {
    return axios.get('/search', {
      params: {
        with_genres: id
      }}).then((res) => {
      this.setState({movies: res.data.results});
    }).catch(function(err) {
      console.log(err)
    })
  }




  saveMovie() {

  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search
          handleGenre={this.getMovies}
          swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies

          movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));