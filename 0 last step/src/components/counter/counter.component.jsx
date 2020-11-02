import React from "react";
import { connect } from "react-redux";
import {
  IncrementCounter,
  DecrementCounter,
} from "../../redux/counter//counter.action";

import "./counter.styles.scss";

function Counter({ IncrementCounter, DecrementCounter, counter }) {
  return (
    <div>
      counter : {counter}
      <button onClick={() => IncrementCounter(counter)}>INCREMENT</button>
      <button onClick={() => counter > 0 && DecrementCounter(counter)}>
        DECREMENT
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps, { IncrementCounter, DecrementCounter })(
  Counter
);
