import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../containers/Auth/actions";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../containers/store";

const SignIn = () => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  const [authData, setAuthData] = React.useState({
    username: {
      value: "",
      isError: false,
      errMessage: "Tên đăng nhập cần ít nhất 1 ký tự",
    },
    password: {
      value: "",
      isError: false,
      errMessage: "Mật khẩu cần ít nhất 1 ký tự",
    },
  });
  console.log("login", isAuth);

  React.useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    if (username !== '' && password !== '') {
      dispatch(
        login({
          username: data.get("username"),
          password: data.get("password"),
        })
      );
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        value: value,
      },
    };
    setAuthData(newAuthData);
  };

  const checkAuthDataValid = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      const newAuthData = {
        ...authData,
        [name]: {
          ...authData[name],
          isError: true,
        },
      };
      setAuthData(newAuthData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        isError: false,
      },
    };
    setAuthData(newAuthData);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Tên đăng nhập"
              name="username"
              autoComplete="username"
              autoFocus
              onBlur={checkAuthDataValid}
              onFocus={onFocusHandler}
              value={authData.username.value}
              error={authData.username.isError}
              onChange={onChangeInputHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onFocus={onFocusHandler}
              onBlur={checkAuthDataValid}
              value={authData.password.value}
              error={authData.password.isError}
              onChange={onChangeInputHandler}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
