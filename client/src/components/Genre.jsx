import React from 'react';


function Genre (props) {
  {this.props.genres.map((genre) => (
     <option value={genre.id}>{genre.name}</option>
  ))}
}


export default Genre;