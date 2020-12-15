import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useStyles } from '../css/GlobalStyles'
import DrinkDetail from "./DrinkDetail";

function SearchResults(props) {
  const classes = useStyles();
  const { results } = props;
  
  return (
    <div>
      <Grid
        style={{
          backgroundColor: "#121212",
          marginTop: 50,
          paddingBottom: 100,
        }}
      >
        <Grid container style={{ width: 1000, margin: "auto" }}>
          {results && results !== null
            ? results.map((drink, index) => {
                return <DrinkDetail drink={drink} key={index} />;
              })
            : <Typography className={classes.text}>no drink searches found</Typography>}
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchResults;
