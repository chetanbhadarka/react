import axios from "axios";
import { preFix, routeAPI } from "../constant";
import { errorToast, successToast } from "./ToastAction";

export const loginAPI = async (userData) => {
  const URL = preFix + routeAPI.authLogin;
  return await axios
    .post(URL, userData)
    .then((response) => {
      if (response?.data?.data) {
        return response.data.data;
      } else {
        errorToast(response?.data?.message);
      }
    })
    .catch((error) => {
      errorToast("Something went wrong! Please try again.");
    });
};

export const registrationAPI = async (userData) => {
  const URL = preFix + routeAPI.registration;
  return await axios
    .post(URL, userData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response?.data?.data) {
        return response.data.data;
      } else {
        errorToast(response?.data?.message);
      }
    })
    .catch((error) => {
      errorToast("Something went wrong! Please try again.");
    });
};
