import React, { useState } from "react";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useStyles } from "../css/GlobalStyles";

function DrinkDetail(props) {
  const classes = useStyles();
  const { drink, isDisabled } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [drinkObject] = useState(drink);

  const createDrink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/drink/create", { drinkObject })
      .then((res) => {
        navigate(`/user/${props.id}/dashboard`);
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
    <React.Fragment>
      <div>
        <Grid container direction="column" style={{ width: 200, margin: 25 }}>
          <div onClick={handleOpen}>
            <img src={drink.strDrinkThumb + "/preview"} alt={"blue"} />
            <Typography className={classes.text} style={{ marginTop: 15 }}>
              {drink.strDrink}
            </Typography>
          </div>
        </Grid>
        <div>
          <Modal className={classes.modal} open={isOpen} onClose={handleClose}>
            <form
              onSubmit={createDrink}
              style={{ outline: "none", height: 600, width: 600 }}
            >
              <Grid
                style={{
                  height: 600,
                  width: 600,
                  padding: 15,
                  display: "flex",
                }}
                direction="column"
                container
              >
                {/* img/description */}
                <Grid container item direction="row" style={{ width: 580 }}>
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
                    <Grid
                      container
                      style={{ marginTop: 15, width: 320, height: 180 }}
                      direction="row"
                    >
                      <Grid item direction="column">
                        {Object.keys(drink)
                          .filter((ing) => ing.includes("strIngredient"))
                          .map((x) => (
                            <Typography>{drink[x]}</Typography>
                          ))}
                      </Grid>
                      <Grid item direction="column" style={{ paddingLeft: 10 }}>
                        {Object.keys(drink)
                          .filter((ing) => ing.includes("strMeasure"))
                          .map((x) => (
                            <Typography>{drink[x]}</Typography>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* instructions */}
                <Grid item style={{ marginTop: 20, width: 580, height: 230 }}>
                  <Typography>{drink.strInstructions}</Typography>
                </Grid>
                {/* submit button */}
                <Grid container item style={{ width: 580 }} justify="flex-end">
                  <SubmitButton
                    buttonTitle="Add to favorite"
                    buttonColor="primary"
                    isDisabled={isDisabled}
                  />
                </Grid>
              </Grid>
            </form>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DrinkDetail;
