import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
        navigate("/user/" + res.data.msg + "/search");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Typography>Login</Typography>
      <form onSubmit={handleLogin}>
        <Typography>Email</Typography>
        <TextField value={email} onInput={(e) => setEmail(e.target.value)} />

        <Typography>Password</Typography>
        <TextField
          value={[password]}
          onInput={(e) => setPassword(e.target.value)}
        />
        <Link to="/register">
          <Typography>Click here to create an account</Typography>
        </Link>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
