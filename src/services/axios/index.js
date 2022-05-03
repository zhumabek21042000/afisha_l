import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://captkakao.su",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("auth-token");

    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
      alert(config.headers.authorization)
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;