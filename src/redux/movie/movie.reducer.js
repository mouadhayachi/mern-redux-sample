import MovieActionTypes from "./movie.types";

const INITIAL_STATE = {
  movies: [
    {
      id: 1,
      name: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      duration: "2h22",
      year: "1994",
      description:
        "Two imprisoned men bond over a number of movieyears, finding solace and eventual redemption through acts of common decency.",
      rate: 2,
    },
    {
      id: 2,
      name: "The Godfather",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      duration: "2h55",
      year: "1972",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rate: 4,
    },
    {
      id: 3,
      name: "The Dark Knight",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      duration: "2h32",
      year: "2008",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rate: 5,
    },
    {
      id: 4,
      name: "The Godfather II",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
      duration: "3h22",
      year: "1974",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      rate: 3,
    },
    {
      id: 5,
      name: "Pulp Fiction",
      image:
        "https://i.pinimg.com/736x/18/9d/82/189d825fac525d43548d191d69fd9708.jpg",
      duration: "2h32",
      year: "1994",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rate: 1,
    },
    {
      id: 6,
      name: "Schindler's List",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      duration: "3h15",
      year: "1993",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      rate: 5,
    },
    {
      id: 7,
      name: "The Lord of the Rings I",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      duration: "3h21",
      year: "2001",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      rate: 4,
    },
    {
      id: 8,
      name: "12 Angry Men",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,649,1000_AL_.jpg",
      duration: "1h36",
      year: "1957",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      rate: 3,
    },
  ],
};

const MovieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieActionTypes.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case MovieActionTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    default:
      return state;
  }
};

export default MovieReducer;
