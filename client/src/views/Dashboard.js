import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Header from "../components/Header";

function Dashboard(props) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/drink")
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      
      {drinks.map((drink, index) => {
        return (
          <div key={index}>
            {console.log(drink._id)}
            <Typography>{drink.drinkObject.strDrink}</Typography>
            <Button
              onClick={() => {
                navigate("/" + drink.drinkObject.idDrink + "/details", {
                  state: { drinkId: drink._id },
                });
              }}
              variant="contained"
              color="secondary"
            >
              Details
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
