import React from "react";
import { useDispatch } from "react-redux";

import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../redux/actions";

export default function CounterButtons() {
  const dispatch = useDispatch();

  const incrementAC = () => dispatch(incrementAction());

  const decrementAC = () => dispatch(decrementAction());

  const resetAC = () => dispatch(resetAction());

  return (
    <div id="CounterButtons">
      <button type="button" onClick={incrementAC}>
        increment
      </button>
      <button type="button" onClick={decrementAC}>
        decrement
      </button>
      <button type="button" onClick={resetAC}>
        reset
      </button>
    </div>
  );
}
