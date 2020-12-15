import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SubmitButton from "./SubmitButton";
import Grid from "@material-ui/core/Grid";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";

import { useStyles } from "../css/GlobalStyles";
function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.msg);
        navigate(`/user/${res.data.msg}/dashboard`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleLogin} style={{ width: "100%", height: "100%" }}>
        <Grid
          container
          direction="column"
          style={{
            width: 400,
            marginTop: 100,
            margin: "auto",
          }}
        >
          <Grid>
            <LockOpenSharpIcon color="action" style={{ margin: 10 }} />
          </Grid>
          <Typography variant="h4" className={classes.text}>
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            label="Email Address"
            variant="outlined"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />{" "}
          <TextField
            margin="normal"
            required
            label="Password"
            variant="outlined"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <SubmitButton buttonTitle="Sign In" buttonColor="primary" />
          <Link to="/register">
            <Typography>Click here to create an account</Typography>
          </Link>
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;
