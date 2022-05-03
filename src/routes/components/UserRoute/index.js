import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/index";

function UserRoute({ children, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  return localStorage.getItem("token") ? <Navigate to={url.get("redirect") || "/"} /> : children;
}

export default UserRoute;