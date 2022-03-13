import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAIL,
  ADD_CHILD_SUCCESS,
  ADD_CHILD_FAIL
}  from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_MEMBER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case ADD_MEMBER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case ADD_CHILD_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case ADD_CHILD_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        }
      default:
        return state;
    }
  }