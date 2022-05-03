import { useContext } from "react";
import { AuthContext } from "../contexts/index";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;