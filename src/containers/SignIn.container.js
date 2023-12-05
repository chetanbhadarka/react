import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../redux/action/AuthAction";
import { successToast } from "../redux/action/ToastAction";
import { setUserDetail } from "../redux/reducer/UserReducer";
import { onLogin } from "../redux/reducer/AuthReducer";

const paperStyle = {
  padding: 20,
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, SetFormValue] = useState({});

  const handleOnChange = (event) => {
    const { name, value, checked } = event.target;
    SetFormValue({
      ...formValue,
      [name]: name === "remember" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: formValue?.email,
      password: formValue?.password,
    };
    const loginResponse = await loginAPI(userData);
    if (loginResponse) {
      dispatch(onLogin(true));
      dispatch(setUserDetail(loginResponse));
      successToast("Sign In Successfull!");
      navigate("/application/dashboard");
    }
  };

  const onSignUpPress = (event) => {
    event.preventDefault();
    navigate("/application/sign-up");
  };

  return (
    <Grid
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
    >
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Grid my={2}>
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              fullWidth
              required
              value={formValue?.email}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid my={2}>
            <TextField
              id="password"
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={formValue?.password}
              onChange={handleOnChange}
            />
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValue?.remember}
                name="remember"
                color="primary"
                onChange={handleOnChange}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          <Button
            type="button"
            color="success"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={onSignUpPress}
          >
            want to register?
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignInContainer;
