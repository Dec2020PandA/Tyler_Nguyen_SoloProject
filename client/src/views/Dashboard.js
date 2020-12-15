import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStyles } from "../css/GlobalStyles";
import Header from "../components/Header";

import Grid from "@material-ui/core/Grid";

import DrinkDetail from "../components/DrinkDetail";
import { Typography } from "@material-ui/core";

function Dashboard(props) {
  const classes = useStyles();
  const [drinks, setDrinks] = useState([]);
  const [user, setUser] = useState({});
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

  return (
    <div>
      <Header id={props.id} />
      <Typography className={classes.text} style={{ margin: 10 }}>
        {user.firstName}'s Favorite Drinks
      </Typography>
      <Grid
        style={{
          backgroundColor: "#121212",
          marginTop: 50,
          paddingBottom: 100,
        }}
      >
        <Grid container style={{ width: 1000, margin: "auto" }}>
          {console.log(drinks)}
          {drinks.length === 1 ? (
            drinks.map((drink, index) => {
              return (
                <Grid>
                  <DrinkDetail drink={drink.drinkObject} isDisabled={true} />
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
