import React from "react";

import { connect } from "react-redux";

import { DeleteMovie } from "../../redux/movie/movie.action";

import "./movie.styles.scss";

const MovieCard = ({ movie, DeleteMovie }) => {
  return (
    <div className="movie-container">
      <img src={movie.image} alt={movie.image} className="img-style" />
      <div style={{ padding: "8px" }}>
        <p>{movie.name}</p>
        <p>{movie.description}</p>
      </div>
      <button className="btn-delete" onClick={() => DeleteMovie(movie.id)}>X</button>
    </div>
  );
};

export default connect(null, { DeleteMovie })(MovieCard);
