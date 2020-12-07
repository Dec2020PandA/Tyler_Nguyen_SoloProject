import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "@reach/router";
import GButton from "../components/GButton";
import Typography from "@material-ui/core/Typography";

function DrinkDetails(props) {
  const [drink, setDrink] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/drink/" + props.id).then((res) =>
      setDrink({
        ...res.data,
      })
    );
  }, [props]);

  return (
    <div>
      <Typography variant="h3">{drink.drinkName}</Typography>
      <Typography>{drink.drinkIngredients}</Typography>
      <Typography>{drink.drinkInstructions}</Typography>
      <Link to="/dashboard">
        <GButton buttonTitle="Return to dashboard" buttonColor="secondary" />
      </Link>
    </div>
  );
}

export default DrinkDetails;
