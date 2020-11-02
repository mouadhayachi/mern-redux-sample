

export const IncrementCounter = (payload) => ({
  type: "INCREMENT_COUNTER",
  payload,
});

export const DecrementCounter = (payload) => ({
  type: "DECREMENT_COUNTER",
  payload,
});
