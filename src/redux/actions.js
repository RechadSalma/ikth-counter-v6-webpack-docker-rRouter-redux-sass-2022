import { INCREMENT, DECREMENT, RESET } from "./types.js";

export const incrementAction = () => ({ type: INCREMENT });

// using redux-thunk method
export const decrementAction = () => (dispatch) =>
  dispatch({ type: DECREMENT });

export const resetAction = () => ({ type: RESET });
