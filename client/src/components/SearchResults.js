import React, { useState } from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function SearchResults(props) {
  const { results } = props;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>Search Results</Typography>
          {results
            ? results.map((drink, index) => {
                return <div key={index}>{drink.strDrink}</div>;
              })
            : null}
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchResults;
