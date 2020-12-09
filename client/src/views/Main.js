import React from "react";

import { Router } from "@reach/router";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

function Main() {
  return (
    <Router>
      <RegisterForm path="/register" />
      <LoginForm path="/" />
    </Router>
  );
}
export default Main;
