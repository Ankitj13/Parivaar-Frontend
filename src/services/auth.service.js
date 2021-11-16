import axios from "axios";
const API_URL = "http://localhost:8089/";

const login = (values) => {
  return axios
    .post(API_URL + "authenticate", values)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const addMember = (values) => {
  return axios.post(API_URL + "Add_employee", values)
    .then((response) => {
      console.log(response);
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
  addMember
};