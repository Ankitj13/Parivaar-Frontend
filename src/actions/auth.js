import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAIL,  
    ADD_CHILD_SUCCESS,
    ADD_CHILD_FAIL,
    ADD_MOTHER_SUCCESS,
    ADD_MOTHER_FAIL,
    ADD_LACTIC_MOTHER_SUCCESS,
    ADD_LACTIC_MOTHER_FAIL
  } from "./types";
  
  import AuthService from "../services/auth.service";
    
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const addMember = (name, email, village, mobileno, password, role_id) => (dispatch) => {
    return AuthService.addMember(name, email, village, mobileno, password, role_id).then(
      (response) => {
        dispatch({
          type: ADD_MEMBER_SUCCESS,  
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_MEMBER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };

  export const addChild = (child_id, childName, parents_name, child_dob, village, mobileno, category, anganwari, gender, complications, sevakutir_id) => (dispatch) => {
    return AuthService.addChild(child_id, childName, parents_name, child_dob, village, mobileno, category, anganwari, gender, complications, sevakutir_id).then(
      (response) => {
        dispatch({
          type: ADD_CHILD_SUCCESS,   
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_CHILD_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const addMother = (motherName, husband_name, motherAge, familyMembers, mobile, category, complications, monthOfPregnancy, anganwari, sevakutir_id, numberOfChild) => (dispatch) => {
    return AuthService.addMother(motherName, husband_name, motherAge, familyMembers, mobile, category, complications, monthOfPregnancy, anganwari, sevakutir_id, numberOfChild).then(
      (response) => {
        dispatch({
          type: ADD_MOTHER_SUCCESS,   
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_MOTHER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const addLacticMother = (lacticMotherName, husbandname, age, familyMembers, mobileno, category, complications, monthOfDelivery, anganwari, numberOfChild, sevakutir_id) => (dispatch) => {
    return AuthService.addLacticMother(lacticMotherName, husbandname, age, familyMembers, mobileno, category, complications, monthOfDelivery, anganwari, numberOfChild, sevakutir_id).then(
      (response) => {
        dispatch({
          type: ADD_LACTIC_MOTHER_SUCCESS,   
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_LACTIC_MOTHER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
      dispatch({
      type: LOGOUT,
    });
  };