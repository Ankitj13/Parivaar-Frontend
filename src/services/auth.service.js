import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const API_URL = "http://localhost:8089/";
const MySwal = withReactContent(Swal);


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
      console.log(response.data.message);
      MySwal.fire({
        icon: 'success',
        title: (response.data.message)
        //text: (response.data.message)
      })
    return response.data;
  })
  // .catch((response) => {
  //   console.log(response.errors.message);
  //   MySwal.fire({
  //     icon: 'error',
  //     title: 'Opps...',
  //     text: (response.errors.message)
  //   })
  // })
};

const addChild = (values) => {
  return axios.post(API_URL + "Add_Child", values)
    .then((response) => {
      console.log(response.data.message);
      MySwal.fire({
        icon: 'success',
        title: (response.data.message)
        //text: (response.data.message)
      })
    return response.data;
  })
};

const addMother = (values) => {
  return axios.post(API_URL + "Add_Mother", values)
    .then((response) => {
      console.log(response.data.message);
      MySwal.fire({
        icon: 'success',
        title: (response.data.message)
        //text: (response.data.message)
      })
    return response.data;
  })
};

const addLacticMother = (values) => {
  return axios.post(API_URL + "Add_Lactic_Mother", values)
    .then((response) => {
      console.log(response.data.message);
      MySwal.fire({
        icon: 'success',
        title: (response.data.message)
        //text: (response.data.message)
      })
    return response.data;
  })
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
  addMember,
  addChild,
  addMother,
  addLacticMother
};