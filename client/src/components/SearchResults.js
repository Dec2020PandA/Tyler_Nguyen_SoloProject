import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../css/GlobalStyles";
import DrinkDetail from "./DrinkDetail";

function SearchResults(props) {
  const classes = useStyles();
  const { results } = props;

  // marginTop: 50,
  // paddingBottom: 100,

  return (
    <div>
      <Grid
        style={{
          backgroundColor: "#212121",
          minHeight: 800
        }}
      >
        <Grid container style={{ width: 1000, margin: "auto" }}>
          {results && results !== null ? (
            results.map((drink, index) => {
              return (
                <DrinkDetail drink={drink} isDisabled={false} id={props.id} />
              );
            })
          ) : (
            <Typography className={classes.text}>
              no drink searches found
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchResults;
