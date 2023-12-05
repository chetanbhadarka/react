import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registrationAPI } from "../redux/action/AuthAction";
import { successToast } from "../redux/action/ToastAction";

const paperStyle = {
  padding: 20,
};
const btnstyle = { margin: "8px 0" };

const SignUpContainer = () => {
  const navigate = useNavigate();
  const [formValue, SetFormValue] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    SetFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name: formValue?.uname,
      email: formValue?.email,
      password: formValue?.password,
    };

    const apiResponse = await registrationAPI(userData);
    if (apiResponse) {
      successToast("Registration Successfull!");
      navigate("/application/sign-in");
    }
  };

  const onLoginPress = (event) => {
    event.preventDefault();
    navigate("/application/sign-in");
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
            <h2>Register</h2>
          </Grid>
          <Grid my={2}>
            <TextField
              id="uname"
              name="uname"
              label="Name"
              placeholder="Enter Name"
              variant="outlined"
              fullWidth
              required
              value={formValue?.uname}
              onChange={handleOnChange}
            />
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
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Register
          </Button>
          <Button
            type="button"
            color="success"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={onLoginPress}
          >
            Back to Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUpContainer;
