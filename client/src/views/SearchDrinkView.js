import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
function SearchDrinkForm(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const [drink, setDrink] = useState("");
  return (
    <div>
      <Typography variant='h3'>Search for a drink!</Typography>
      <form onSubmit={onSubmitHandler}>
        <TextField variant='outlined' value={drink} onInput={(e) => setDrink(e.target.value)} />
        <Typography>results</Typography>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}

export default SearchDrinkForm;
