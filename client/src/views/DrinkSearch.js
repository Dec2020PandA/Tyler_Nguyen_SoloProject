import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SubmitButton from "../components/SubmitButton";
import SearchResults from "../components/SearchResults";

import Header from "../components/Header";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  text: {
    color: "white",
  },
});

function DrinkSearch() {
  const classes = useStyles();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm
      )
      .then((res) => {
        setResults(res.data.drinks);
      });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header />
      <Typography>Search for a drink!</Typography>
      <form onSubmit={onSubmitHandler}>
        <TextField
          className={classes.text}
          variant="outlined"
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.target.value)}
          inputProps={{ style: { backgroundColor: "white" } }}
        />
        <SubmitButton buttonTitle="Search" buttonColor="primary" />
      </form>
      {/* results here */}
      <SearchResults results={results} />
    </div>
  );
}

export default DrinkSearch;
