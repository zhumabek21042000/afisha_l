import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/endpoints/auth";
import useAuth from "../../hooks/index";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AfishaService from "../../services/axios/index";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Verify({ route, navigation }) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const auth = useAuth();

  const sendEmail = () => {
    AfishaService.confirm_email(localStorage.getItem("temp_mail")).then(() => {
      alert("Проверьте свою почту! Ссылка выслана");
      localStorage.removeItem("temp_mail");
      navigate("/");
    });
  };
  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Grid item xs={12}>
          <h3 onClick={() => sendEmail()}>
            Нажмите сюда чтобы подтвердить почту
          </h3>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Verify;
