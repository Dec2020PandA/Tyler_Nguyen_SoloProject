import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";

import Header from "../components/Header";

function DrinkPage(props) {
  const { drinkId } = props.location.state;
  const deleteDrink = (e) => {
    axios
      .delete("http://localhost:8000/api/drink/" + drinkId)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <Button onClick={deleteDrink} variant="contained" color="primary">
        Remove Drink
      </Button>
    </div>
  );
}

export default DrinkPage;
