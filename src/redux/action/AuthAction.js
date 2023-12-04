import axios from "axios";
import { preFix, routeAPI } from "../constant";

export const loginAPI = async (userData) => {
  console.log(preFix);
  //   return async (dispatch) => {
  const URL = preFix + routeAPI.authLogin;
  return await axios
    .post(URL, userData)
    .then((response) => {
      console.log("response => ", response);
    })
    .catch((error) => {
      console.log("error => ", error);
    });
  //   };
};
