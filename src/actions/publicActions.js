import axios from "axios";
import * as types from "./types";


const API_URL = "http://localhost:8089/";

const getMembers = (employees) => ({
    type: types.GET_MEMBERS,
    payload: employees,
});

export const loadMembersUsers = () => {
    return function (dispatch) {
        axios 
        .get(API_URL + "Employees")
        .then((resp) => {
            dispatch(getMembers(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

const getChildAll = (employees) => ({
    type: types.GET_CHILD_ALL,
    payload: employees,
});

export const loadAllChilds = () => {
    return function (dispatch) {
        axios 
        .get(API_URL + "Get_Child")
        .then((resp) => {
            dispatch(getChildAll(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

const getMotherAll = (employees) => ({
    type: types.GET_MOTHER_ALL,
    payload: employees,
});

export const loadAllMothers = () => {
    return function (dispatch) {
        axios 
        .get(API_URL + "Get_Mother")
        .then((resp) => {
            dispatch(getMotherAll(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

const getLactaticMotherAll = (employees) => ({
    type: types.GET_MOTHER_ALL,
    payload: employees,
});

export const loadAllLactacticMothers = () => {
    return function (dispatch) {
        axios 
        .get(API_URL + "Get_Lactic_Mothers")
        .then((resp) => {
            dispatch(getLactaticMotherAll(resp.data));
        })
        .catch((error) => console.log(error));
    };
};


const getDistrict = (districts) => ({
    type: types.GET_DISTRICT,
    payload: districts,
});

export const loadAllDistricts = () => {
    return function (dispatch) {
        axios 
        .get(API_URL + "Get_District")
        .then((resp) => {
            dispatch(getDistrict(resp.data));
        })
        .catch((error) => console.log(error));
    };
};
