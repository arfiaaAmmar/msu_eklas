import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [userMode, setUserMode] = useState("student");
  const [route, setRoute] = useState()
  // const { login } = useAuth();
  const active = "w-2/4 flex items-center justify-evenly border-r border-neutral-300 bg-neutral-300"
  const inactive = "w-2/4 flex items-center justify-evenly border-r border-neutral-300"

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const handleSubmit = () => {

  }

  return (
    <div className="h-screen ">
      <div className="flex overflow-hidden bg-neutral-800 h-1/4 relative">
        <img
          className="object-contain px-8 pt-6"
          src="/images/eklas_logo.png"
          alt="msu logo"
        />
      </div>
      <h1 className="mx-8 my-2 text-2xl font-bold">Welcome</h1>
      <div className="flex mx-8 justify-evenly border border-neutral-400 rounded-lg">
        <div
          className={
            userMode == "student"
              ? active
              : inactive
          }
          onClick={() => setUserMode("student")}
        >
          <div>
            <Icon icon="ph:student-light" width="42" height="42" />
          </div>
          <p>Student</p>
        </div>
        <div
          className={
            userMode == "lecturer"
              ? active
              : inactive
          }
          onClick={() => setUserMode("lecturer")}
        >
          <div>
            <Icon icon="ph:chalkboard-teacher-light" width="42" height="42" />
          </div>
          <p>Lecturer</p>
        </div>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        className="mt-2 mx-8"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#ed2124",
          }}
        >
          <Link to="/home">Sign In</Link>
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/register">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
