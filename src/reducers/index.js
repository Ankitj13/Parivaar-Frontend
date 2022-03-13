import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import usersReducers from "./publicReducer";

 const rootReducer =  combineReducers({
  auth,
  message,
  data: usersReducers,
});
// const rootReducer = combineReducers({
   
// });

export default rootReducer;