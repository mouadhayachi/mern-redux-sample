import React from "react";
import { connect } from "react-redux";

import {
  IncrementCounter,
  DecrementCounter,
} from "../../redux/counter/counter.action";

import "./counter.styles.scss";

const Counter = ({ counter, IncrementCounter, DecrementCounter }) => (
  <div className="counter-container">
    <button className="bnt-counter" onClick={() => IncrementCounter()}>
      +
    </button>
    {counter}
    <button className="bnt-counter" onClick={() => DecrementCounter()}>
      -
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps, { IncrementCounter, DecrementCounter })(
  Counter
);
