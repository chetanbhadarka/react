import axios from "axios";
import { routeAPI } from "../constant";
import { errorToast } from "./ToastAction";

export const GetAllUserAPI = async (page) => {
  const URL = `${routeAPI.users}?page=${page}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("GetAllUserAPI => ", error);
    errorToast("Something went wrong! Please try again.");
  }
};
