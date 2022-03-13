import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import axios from "axios";
import authHeader from "./services/auth-header";

const middleware = [thunk];

axios.interceptors.request.use((response) => {
  console.log(authHeader());
  response.headers = authHeader();
  return response;
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;