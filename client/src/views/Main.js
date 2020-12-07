import React from "react";
import SearchDrinkForm from "../components/SearchDrinkForm";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: "90%",
    backgroundColor: "#FFFaaa",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div>
      <Typography>Search for a drink!</Typography>
      <Card className={classes.card}>
        <CardContent>
          <SearchDrinkForm />
        </CardContent>
      </Card>
    </div>
  );
}
export default Main;
