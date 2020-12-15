import React, { useState } from "react";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";

import IngredientDialog from "./IngredientDialog";

import { useStyles } from "../css/GlobalStyles";

function DrinkDetail(props) {
  const classes = useStyles();
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
        <Grid container direction="column" style={{ width: 200, margin: 25 }}>
          <img src={drink.strDrinkThumb + "/preview"} alt={"blue"} />
          <Typography className={classes.text} style={{ marginTop: 15 }}>
            {drink.strDrink}
          </Typography>
        </Grid>
      </div>

      <div>
        <Modal className={classes.modal} open={isOpen} onClose={handleClose}>
          <form
            onSubmit={createDrink}
            style={{ outline: "none", height: 600, width: 600 }}
          >
            <Grid style={{ margin: 10 }}>
              <Grid container direction="row">
                <img
                  src={drink.strDrinkThumb + "/preview"}
                  alt={"blue"}
                  style={{ height: 250, width: 250 }}
                />
                <Grid style={{ marginLeft: 10, width: 320 }}>
                  <Typography style={{ fontSize: 25 }}>
                    {drink.strDrink}
                  </Typography>
                  <Typography style={{ fontSize: 15 }}>
                    Type: {drink.strCategory}
                  </Typography>
                  <Grid style={{ marginTop: 15, width: 320, height: 180 }}>
                    {Object.keys(drink)
                      .filter((ing) => ing.includes("strIngredient"))
                      .map((x) => (
                        <Typography>{drink[x]}</Typography>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid style={{ marginTop: 10 }}>
                <Typography>{drink.strInstructions}</Typography>
              </Grid>
              <Grid>
                <SubmitButton
                  buttonTitle="Add to favorite"
                  buttonColor="primary"
                />
              </Grid>
            </Grid>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default DrinkDetail;
