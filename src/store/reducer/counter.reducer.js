
import {INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER
  } from "../action/actionType"

let initialState = {
   counter:0,
  };

 const user=(state = initialState, action)=> {
    switch (action.type) {
        case INCREMENT_COUNTER:
           
            return {
                counter: state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                counter: state.counter - 1
            }
        case RESET_COUNTER:
            return {
                counter: 0
            }
        default:
            return state;
    }
}

export default user