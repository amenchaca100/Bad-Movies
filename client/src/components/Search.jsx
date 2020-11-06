import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      genre: null
    };
    this.getGenres = this.getGenres.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    return axios.get('/genres').then((allGenres) => {
      this.setState({genres: allGenres.data.genres})
    }).catch((err) =>
     console.log(err));
 }

filterGenre(e) {
  this.setState({genre: e.target.value})
  return this.props.handleGenre(this.state.genre)
  }





  render() {

    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>


        <select onChange={this.filterGenre}>
        { this.state.genres.map((genre) => (
          <option  value={genre.id}>{genre.name}</option>
        ))}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}




export default Search;