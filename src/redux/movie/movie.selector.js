import { createSelector } from "reselect";

const seletMovies = state => state.movie;

export const selectMoviesItems = createSelector(
  [seletMovies],
  movie => movie.movies
);