import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import SubmitButton from "./SubmitButton";

function RegisterForm() {
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
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Typography variant="h3">Register</Typography>
      <form onSubmit={handleRegistration}>
        <Typography>First Name</Typography>
        {/* popup for errors here */}
        {errors.firstName ? (
          <Typography>{errors.firstName.message}</Typography>
        ) : null}
        <TextField
          variant="outlined"
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
        />
        <Typography>Last Name</Typography>
        {errors.lastName ? (
          <Typography>{errors.lastName.message}</Typography>
        ) : null}
        <TextField
          variant="outlined"
          value={lastName}
          onInput={(e) => setLastName(e.target.value)}
        />

        <Typography>Email</Typography>
        {errors.email ? <Typography>{errors.email.message}</Typography> : null}
        <TextField
          variant="outlined"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />

        <Typography>Password</Typography>
        {errors.password ? (
          <Typography>{errors.password.message}</Typography>
        ) : null}
        <TextField
          variant="outlined"
          value={[password]}
          onInput={(e) => setPassword(e.target.value)}
        />

        <Typography>Confirm Password</Typography>
        <TextField
          variant="outlined"
          value={confirmPassword}
          onInput={(e) => setConfirmPassword(e.target.value)}
        />
        <Link to="/login">
          <Typography>Click here if you already have an account</Typography>
        </Link>
        <SubmitButton buttonTitle="Login" buttonColor="primary" />
      </form>
    </div>
  );
}

export default RegisterForm;
