import {INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from "./actionType"

  export const increment = () => dispatch => {
    dispatch({
        type: INCREMENT_COUNTER
      });
}

export const decrement = () => dispatch => {
    dispatch({
        type: DECREMENT_COUNTER
      });
}

export const reset = () => dispatch => {
    dispatch({
        type: RESET_COUNTER
      });
}