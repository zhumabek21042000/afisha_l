import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://captkakao.su",
});

export default axiosInstance