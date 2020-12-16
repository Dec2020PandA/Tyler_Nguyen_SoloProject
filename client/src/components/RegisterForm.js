import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SubmitButton from "./SubmitButton";

import { useStyles } from "../css/GlobalStyles";

function RegisterForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/register",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleRegistration}>
        <Grid
          container
          direction="column"
          style={{
            width: 600,
            margin: "auto",
            backgroundColor: "#333333",
            padding: 50,
          }}
        >
          <Typography style={{ color: "white" }} variant="h3">
            Register
          </Typography>
          {errors.firstName ? (
            <Typography>{errors.firstName.message}</Typography>
          ) : null}
          <TextField
            inputProps={{ className: classes.textFieldLabelInput }}
            label="First Name"
            margin="normal"
            variant="outlined"
            value={firstName}
            onInput={(e) => setFirstName(e.target.value)}
          />
          {errors.lastName ? (
            <Typography>{errors.lastName.message}</Typography>
          ) : null}
          <TextField
            inputProps={{ className: classes.textFieldLabelInput }}
            label="Last Name"
            margin="normal"
            variant="outlined"
            value={lastName}
            onInput={(e) => setLastName(e.target.value)}
          />
          {errors.email ? (
            <Typography>{errors.email.message}</Typography>
          ) : null}
          <TextField
            inputProps={{ className: classes.textFieldLabelInput }}
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          {errors.password ? (
            <Typography>{errors.password.message}</Typography>
          ) : null}
          <TextField
            inputProps={{ className: classes.textFieldLabelInput }}
            label="Password"
            margin="normal"
            variant="outlined"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />

          <TextField
            inputProps={{ className: classes.textFieldLabelInput }}
            label="Confirm Password"
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onInput={(e) => setConfirmPassword(e.target.value)}
          />
          <SubmitButton buttonTitle="Sign Up" buttonColor="primary" />
          <Link to="/">
            <Typography>Click here if you already have an account</Typography>
          </Link>
        </Grid>
      </form>
    </div>
  );
}

export default RegisterForm;
