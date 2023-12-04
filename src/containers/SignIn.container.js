import React, { useEffect, useState } from "react";
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
import { loginAPI } from "../redux/action/AuthAction";

const paperStyle = {
  padding: 20,
  margin: "20px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const SignInContainer = () => {
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
    console.log("Form Value => ", formValue);

    const userData = {
      email: formValue?.email,
      password: formValue?.password,
    };
    await loginAPI(userData);
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
        </form>
      </Paper>
    </Grid>
  );
};

export default SignInContainer;
