import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SubmitButton from "./SubmitButton";
function LoginForm() {
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
        console.log(res.data);
        navigate("/search");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Typography variant="h3">Login</Typography>
      <form onSubmit={handleLogin}>
        <Typography>Email</Typography>
        <TextField
          variant="outlined"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />

        <Typography>Password</Typography>
        <TextField
          variant="outlined"
          value={[password]}
          onInput={(e) => setPassword(e.target.value)}
        />
        <Link to="/register">
          <Typography>Click here to create an account</Typography>
        </Link>
        <SubmitButton buttonTitle="Login" buttonColor="primary" />
      </form>
    </div>
  );
}

export default LoginForm;
