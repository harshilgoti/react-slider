
import {
    FETCH_USER
  } from "../action/actionType"

let initialState = {
   userData:{},
  };

 const user=(state = initialState, action)=> {
    switch (action.type) {
        case FETCH_USER:
            return {
                userData: {
                    name:"harshil",
                    surName:"goti",
                    age:"23"
                }
            }
        default:
            return state;
    }
}

export default user