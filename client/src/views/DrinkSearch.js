import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import SubmitButton from "../components/SubmitButton";
import SearchResults from "../components/SearchResults";

import Header from "../components/Header";

import { useStyles } from "../css/GlobalStyles";

function DrinkSearch(props) {
  const classes = useStyles();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm
      )
      .then((res) => {
        setResults(res.data.drinks);
      })
      .catch((err) => console.log(err));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header id={props.id} />
      <form onSubmit={onSubmitHandler} style={{ margin: 10 }}>
        <TextField
          type="text"
          label="Search for a drink"
          className={classes.textFieldInput}
          variant="outlined"
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.target.value)}
          inputProps={{ className: classes.textFieldInput }}
          InputLabelProps={{ className: classes.textFieldLabelInput }}
        />
        <SubmitButton buttonTitle="Search" buttonColor="primary" />
      </form>
      <SearchResults results={results} id={props.location.state.id} />
    </div>
  );
}

export default DrinkSearch;
