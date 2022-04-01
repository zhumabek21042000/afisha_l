import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login/index";
import Registration from "../../pages/Registration/index";
import useAuth from "../../hooks/index";
import PrivateRoute from "../components/PrivateRoute/index";
import UserRoute from "../components/UserRoute/index";

import { ROUTES } from "../../constants/index";


import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import Main from "../../components/MainPage/Main";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return  (
    <Routes>
 
      <Route
        path="/login"
        element={
          <UserRoute>
            <Login />
          </UserRoute>
        }
      />
      <Route 
        path="/"
        element={<Main></Main>}/>
      <Route
        path="/registration"
        element={
          <UserRoute>
            <Registration />
          </UserRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;