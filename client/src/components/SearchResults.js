import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import DrinkDetail from "./DrinkDetail";

function SearchResults(props) {
  const { results } = props;

  return (
    <div>
      <Card style={{ backgroundColor: "#121212" }}>
        <CardContent>
          <Grid container style={{ width: 1000, margin: "auto" }}>
            {results
              ? results.map((drink, index) => {
                  return <DrinkDetail drink={drink} key={index} />;
                })
              : null}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchResults;
