import React from "react";
import { connect } from "react-redux";

import "./movies-list.styles.scss";

import MovieCard from "../movie/movie.component";
import { selectMoviesItems } from "../../redux/movie/movie.selector";

const MoviesList = ({ listmovie }) => {
  return (
    <div className="movies-list-container">
      {listmovie.map((movie) => (
        <MovieCard movie={movie} key={movie.name} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  listmovie: selectMoviesItems(state),
});

export default connect(mapStateToProps)(MoviesList);
