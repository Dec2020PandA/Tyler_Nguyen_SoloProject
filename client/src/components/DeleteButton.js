import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";

function DeleteButton(props) {
  const { drinkId, successCallback, toggleDelete } = props;
  const deleteDrink = (e) => {
    axios.delete("http://localhost:8000/api/drink/" + drinkId).then((res) => {
      successCallback();
    });
  };
  return (
    <Button variant='contained' color='secondary' style={{ display: toggleDelete }} onClick={deleteDrink}>
      Delete
    </Button>
  );
}

export default DeleteButton;
