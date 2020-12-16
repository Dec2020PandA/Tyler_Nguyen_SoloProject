import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStyles } from "../css/GlobalStyles";
import Header from "../components/Header";

import Grid from "@material-ui/core/Grid";

import DrinkDetail from "../components/DrinkDetail";
import { Typography, Switch } from "@material-ui/core";
import DeleteButton from "../components/DeleteButton";

function Dashboard(props) {
  const classes = useStyles();
  const [drinks, setDrinks] = useState([]);
  const [user, setUser] = useState({});
  const [toggleDelete, setToggleDelete] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/drink")
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8000/api/users/${props.id}`)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (drinkId) => {
    setDrinks(drinks.filter((d) => d._id !== drinkId));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (toggleDelete === "") {
      setToggleDelete("none");
    } else {
      setToggleDelete("");
    }
  };

  return (
    <div>
      <Header id={props.id} />
      <Grid
        style={{ backgroundColor: "#212121", paddingTop: 30, minHeight: 850 }}
      >
        <Grid></Grid>
        <Typography className={classes.text} style={{ fontSize: 40 }}>
          {user.firstName}'s Favorite Drinks
        </Typography>
        <Grid style={{ marginLeft: "100vh" }}>
          <Typography className={classes.text}>Delete Drinks</Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
            name="toggleDelete"
          />
        </Grid>
        <Grid container style={{ width: 1000, margin: "auto" }}>
          {console.log(drinks)}
          {drinks.length !== 0 ? (
            drinks.map((drink, index) => {
              return (
                <Grid>
                  <DrinkDetail drink={drink.drinkObject} isDisabled={true} />
                  <DeleteButton
                    drinkId={drink._id}
                    successCallback={() => removeFromDom(drink._id)}
                    toggleDelete={toggleDelete}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography className={classes.text} style={{ margin: "auto" }}>
              No drinks found, click the search button to add some!
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
