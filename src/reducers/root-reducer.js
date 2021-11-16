import { combineReducers } from "redux";
import usersReducers from "./publicReducer";


const rootReducer = combineReducers({
    data: usersReducers,
});

export default rootReducer;