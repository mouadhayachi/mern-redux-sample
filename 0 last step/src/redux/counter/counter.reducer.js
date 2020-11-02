const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: payload + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: payload - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
