import { combineReducers } from "redux";
import counter from "./counter.reducer";
import user from "./user.reducer";


const appReducer = combineReducers({
  counter,
  user
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
