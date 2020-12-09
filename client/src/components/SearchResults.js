import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import DrinkModal from "./DrinkModal";

function SearchResults(props) {
  const { results } = props;
  return (
    <div>
      <Card>
        <DrinkModal results={results} />
        <CardContent>
          <Typography>Search Results</Typography>
          <Grid container>
            {results
              ? results.map((drink) => {
                  return (
                    <Grid
                      container
                      key={drink.idDrink}
                      direction="column"
                      style={{ width: 200 }}
                    ></Grid>
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
