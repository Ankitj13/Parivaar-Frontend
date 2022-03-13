import * as types from "./ActionType";
import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/users";

const getDistrict = () => ({
    type : types.GET_District
})

export const loadDistrict = () => {
    return function (dispatch) {
        axios.get(`${API_URL}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getDistrict(resp.data));
        })
        .catch((error) => console.log(error));
    };
} ;