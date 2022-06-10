import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login/index";
import Registration from "../../pages/Registration/index";
import useAuth from "../../hooks/index";
import PrivateRoute from "../components/PrivateRoute/index";
import UserRoute from "../components/UserRoute/index";
import MovieDetails from "../../components/Movie/MoviePage/MovieDetails";
import CinemaDetails from "../../components/Cinema/CinemaPage/CinemaDetails";
import SearchCinema from "../../components/Cinema/CinemaList/CinemaSearch/CinemaSearch";
import { ROUTES } from "../../constants/index";

import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import Main from "../../components/MainPage/Main";
import NewsMainPage from "../../components/News/NewsMainPage";
import NewsDetails from "../../components/News/NewsPage/NewsDetails";
import AdminPage from "../../components/Admin/AdminPage";
import CinemaTable from "../../components/Admin/Cinema/CinemaTable";
import Verify from "../../pages/Registration/verify";
// import Profile from "../../components/Profile/Profile

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <UserRoute>
            <Login />
          </UserRoute>
        }
      />
      <Route path="/" element={<Main></Main>} />
      <Route
        path="/registration"
        element={
          <UserRoute>
            <Registration />
          </UserRoute>
        }
      />
      {/* <Route
        exact
        path="/movie/:id"
        render={({ match }) => <MovieDetails id={match.params.id} />}
      /> */}

      <Route path="/adminpanel" element={<AdminPage />} />
      <Route path="/adminpanel/cinemas" element={<CinemaTable />} />
      <Route path={`/movie/:id`} element={<MovieDetails />} />
      <Route path={`/cinema/:id`} element={<CinemaDetails />} />
      <Route path={`/news/:id`} element={<NewsDetails />} />
      {/* <Route path={`/verify-account`} element={<Verify />} /> */}
      <Route path={`/email-verification`} element={<Verify />} />
      {/* <Route path={"/profile"} element={<Profile />} /> */}
      {/* <Route
        path="/cinema/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <CinemaDetails id={id} />;
        }}
      /> */}

      <Route path="/cinemas" element={<SearchCinema />} />
      <Route path="/news" element={<NewsMainPage />} />
    </Routes>
  );
}

export default AppRoutes;
