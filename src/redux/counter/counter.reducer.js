import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  counter: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case CounterActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case CounterActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
