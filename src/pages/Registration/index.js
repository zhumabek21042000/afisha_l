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
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfishaService from "../../services/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Registration() {
  const [email, setEmail] = useState();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

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
      await api.registration(data);
    } catch (e) {
      if (e.response.status === 201) {
        localStorage.setItem("temp_mail", email);
        AfishaService.confirm_email(email).then(() => {
          alert("Проверьте свою почту! Ссылка на подтверждение выслана");
          localStorage.removeItem("temp_mail");
          navigate("/");
        });
      }
      if (e.response.status === 422) {
        alert("Эта почта уже используется!");
      }
      if (e.response.status === 204) {
        localStorage.setItem("temp_mail", email);
        AfishaService.confirm_email(email).then(() => {
          alert("Проверьте свою почту! Ссылка на подтверждение выслана");
          localStorage.removeItem("temp_mail");
          navigate("/");
        });
      }
    } finally {
      setIsLoading(false);
    }
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
          <Typography variant="h6">Регистрация</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.first_name?.message)}
                  fullWidth={true}
                  label="Имя"
                  variant="filled"
                  helperText={errors.first_name?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.last_name?.message)}
                  fullWidth={true}
                  label="Фамилия"
                  variant="filled"
                  helperText={errors.last_name?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              value={email}
              onChange={handleEmail}
              control={control}
              defaultValue=""
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
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#fd6500",
                color: "#fff",
                borderRadius: "12px",
              }}
              type="submit"
              disabled={isLoading}
            >
              Зарегистрироваться
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/login"
            >
              Уже есть аккаунт?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Registration;
