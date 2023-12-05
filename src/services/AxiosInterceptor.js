import axios from "axios";
import { useSelector } from "react-redux";
import { preFix } from "../redux/constant";

const AxiosInterceptor = ({ children }) => {
  const token = useSelector((state) => state?.UserReducer?.userDetail?.Token);

  axios.interceptors.request.use(
    async (config) => {
      if (token) {
        config.baseURL = preFix;
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return children;
};
export default AxiosInterceptor;
