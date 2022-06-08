import axios from "../axios/authentication";

const endpoints = {
  registration: (data) => axios.post("/auth/register", data),
  getUser: () =>
    axios.get("/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    }),
  login: (data) => axios.post("/auth/login", data),
  forgotPassword: (data) => axios.post("/v1/auth/forgot/password", data),
  updateProfile: (data) => axios.patch("/v1/auth/me", data),
};

export default endpoints;
