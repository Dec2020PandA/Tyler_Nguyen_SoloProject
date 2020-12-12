import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";

function DrinkPage(props) {
  const { drinkId, successCallback, test } = props;
  const deleteDrink = (e) => {
    axios
      .delete("http://localhost:8000/api/drink/delete" + drinkId)
      .then((res) => {
        successCallback();
      });
  };

  return (
    <div>
      <Button onClick={deleteDrink} variant="contained" color="primary">
        Remove Drink
      </Button>
    </div>
  );
}

export default DrinkPage;
