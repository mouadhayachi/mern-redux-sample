export const AddMovie = (payload) => {
  return {
    type: "ADD_MOVIE",
    payload,
  };
};

export const DeleteMovie = (payload) => {
  return {
    type: "DELETE_MOVIE",
    payload,
  };
};
