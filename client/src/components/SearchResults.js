import React, { useState } from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Grid from "@material-ui/core/Grid";

function SearchResults(props) {
  const { results } = props;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>Search Results</Typography>
          <Grid container spacing={1}>
            {results
              ? results.map((drink, index) => {
                  return (
                    <Grid
                      container
                      key={index}
                      direction="column"
                      style={{ width: 200 }}
                    >
                      <img
                        src={drink.strDrinkThumb + "/preview"}
                        alt={"blue"}
                      />
                      {drink.strDrink}
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchResults;
