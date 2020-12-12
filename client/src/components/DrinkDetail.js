import React, { useState } from "react";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

import { navigate } from "@reach/router";

function DrinkModal(props) {
  const { drink } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [drinkObject] = useState(drink);

  const createDrink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/drink/create", { drinkObject })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <Grid container direction="column" style={{ width: 200 }}>
          <img src={drink.strDrinkThumb + "/preview"} alt={"blue"} />
          {drink.strDrink}
        </Grid>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <form onSubmit={createDrink}>
          <img src={drink.strDrinkThumb + "/preview"} alt={"blue"} />
          {drink.strDrink}
          <SubmitButton buttonTitle="Add to favorite" buttonColor="primary" />
        </form>
      </Modal>
    </div>
  );
}

export default DrinkModal;
