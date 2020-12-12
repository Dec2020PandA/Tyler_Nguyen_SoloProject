import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

  const removeFromDom = (drinkId) => {
    setDrinks(drinks.filter((d) => d._id !== drinkId));
  };

  return (
    <div>
      <Typography>dashboard</Typography>
      {drinks.map((drink, index) => {
        return (
          <div key={index}>
            <Typography>{drink.drinkObject.strDrink}</Typography>
            <Button
              onClick={() => {
                navigate("/" + drink.drinkObject.idDrink + "/details");
              }}
              successCallback={() => removeFromDom(drink._id)}
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
