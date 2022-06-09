import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material/Box";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/endpoints/auth";
import useAuth from "../../hooks/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AfishaService from "../../services/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const [email, setEmail] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: loginData } = await api.login(data);
      localStorage.setItem("token", loginData.auth_token);

      auth.setToken(loginData.auth_token);
      alert(loginData.auth_token);
      console.log(auth.token);
      auth.setUser(api.getUser.data);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "validation",
            message: e.response.data.errors[key],
          });
        });
      } else if (e.response.status === 401) {
        alert("Неправильная почта или пароль");
      } else if (e.response.status === 400) {
        localStorage.setItem("temp_mail", email);
        AfishaService.confirm_email(email).then(() => {
          localStorage.removeItem("temp_mail");
          navigate("/");
          alert("Проверьте свою почту! Ссылка выслана");
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Войдите или зарегистрируйтесь</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              value={email}
              onChange={handleEmail}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.email?.message)}
                  fullWidth={true}
                  type="email"
                  label="Почта"
                  variant="filled"
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
                  label="Пароль"
                  variant="filled"
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              padding: "0 10px",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#fd6500",
                color: "#fff",
                borderRadius: "12px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
              type="submit"
              disabled={isLoading}
            >
              Войти
            </Button>
            <Button
              style={{
                backgroundColor: "#4f4f60",
                color: "#fff",
                borderRadius: "12px",
                borderColor: "#4f4f60",
              }}
              type="submit"
              component={Link}
              to="/registration"
            >
              Регистрация
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
