import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import GButton from "../components/GButton";

function Dashboard(props) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/drink")
      .then((res) => setDrinks(res.data));
  });
  return (
    <div>
      <Typography>dashboard</Typography>
      {drinks.map((drink, index) => {
        return (
          <div key={index}>
            <Typography>drink name</Typography>
            <Link to={"/" + drink.drinkName + "/details"}>
              <GButton buttonTitle="Details" buttonColor="secondary" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
