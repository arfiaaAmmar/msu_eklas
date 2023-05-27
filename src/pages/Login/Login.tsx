import { Icon } from "@iconify/react";
import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import EklasLogo from '../../assets/images/eklas_logo.png'
import { GlobalContext } from "../../context/GlobalContext";
import { authenticateUser } from "../../hooks/useAuth";

const Login = () => {
  const context = useContext(GlobalContext)
  const { user, setUser } = context

  const handleSubmit = () => {
    if (user?.username == "" || user?.password == "") return
    authenticateUser(user.username, user.password)
  }

  const active = "w-2/4 flex items-center justify-evenly border-r border-neutral-300 bg-neutral-300 text-neutral-800"
  const inactive = "w-2/4 flex items-center justify-evenly border-r border-neutral-300 text-neutral-800"

  return (
    <div className="h-screen ">
      <CssBaseline />
      <div className="flex overflow-hidden bg-neutral-800 h-1/4 relative">
        <img
          className="object-contain px-8 pt-6"
          src={EklasLogo}
          alt="msu logo"
        />
      </div>
      <h1 className="mx-8 my-2 text-2xl font-bold">Welcome</h1>
      <div className="flex mx-8 justify-evenly border border-neutral-400 rounded-lg">
        <Button
          className={
            user.mode == "student"
              ? active
              : inactive
          }
          onClick={() => setUser({...user, mode: "student"})}
        >
          <div>
            <Icon icon="ph:student-light" width="42" height="42" />
          </div>
          <p>Student</p>
        </Button>
        <Button
          className={
            user.mode == "lecturer"
              ? active
              : inactive
          }
          onClick={() => setUser({...user, mode: "lecturer"})}
        >
          <div>
            <Icon icon="ph:chalkboard-teacher-light" width="42" height="42" />
          </div>
          <p>Lecturer</p>
        </Button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="mt-2 mx-8"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          onChange={(e: any) => setUser({...user, email: e.target.value})}
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
          onChange={(e: any) => setUser({...user, password: e.target.value})}
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/register">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
