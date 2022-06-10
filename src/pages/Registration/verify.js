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
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import AfishaService from "../../services/axios/index";
import { Loader } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Verify({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const auth = useAuth();

  const sendEmail = () => {
    const paramEmail = searchParams.get("email");
    const paramCode = searchParams.get("confirmation_code");
    AfishaService.send_code_email(paramEmail, paramCode).then((res) => {
      if (res.status === 200) {
        alert("Почта успешна подтверждена!");
        navigate("/");
      }
    });
  };
  return (
    <>
      {loading === true ? (
        <Container maxWidth="xs" className={classes.root}>
          <Loader active inline="centered" />
          {sendEmail()}
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Verify;
