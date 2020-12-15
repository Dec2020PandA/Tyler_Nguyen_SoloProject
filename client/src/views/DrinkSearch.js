import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import SubmitButton from "../components/SubmitButton";
import SearchResults from "../components/SearchResults";

import Header from "../components/Header";

import { useStyles } from "../css/GlobalStyles";

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
      <form onSubmit={onSubmitHandler}>
        <TextField
          className={classes.text}
          variant="outlined"
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.target.value)}
          inputProps={{className: classes.textFieldInput}}
        />
        <SubmitButton buttonTitle="Search" buttonColor="primary" />
      </form>
      <SearchResults results={results} />
    </div>
  );
}

export default DrinkSearch;
