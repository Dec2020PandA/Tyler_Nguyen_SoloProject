import React, { useState } from "react";
import "../App.css";
import axios from "axios";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { navigate } from "@reach/router";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "../css/GlobalStyles";

function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };
  const handleLogout = (e) => {
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res);
        handleClick();
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <Typography className={classes.text}>Drinks on Demand</Typography>
        </Button>

        <IconButton
          onClick={() => {
            navigate("/search");
          }}
        >
          <SearchIcon className={classes.text} />
        </IconButton>
        <Button
          onClick={() => {
            handleLogout();
          }}
          variant="outlined"
          size="small"
          className={classes.logout}
        >
          <Typography className={classes.text}>Log out</Typography>
        </Button>
      </Toolbar>
      <Divider className={classes.divider} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}>Log out successful, redirecting...</Alert>
      </Snackbar>
    </div>
  );
}

export default Header;