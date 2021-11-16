import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8089/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "USER", { headers: authHeader() });
};

const getOpertorBoard = () => {
  return axios.get(API_URL + "OPERATOR", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "ADMIN", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getOpertorBoard,
  getAdminBoard,
};