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
import Grid from "@material-ui/core/Grid";
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
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid item>
            <Button
              onClick={() => {
                navigate(`/user/${props.id}/dashboard`);
              }}
            >
              <Typography className={classes.text}>Drinks on Demand</Typography>
            </Button>
          </Grid>
          <Grid item>
            {" "}
            <IconButton
              onClick={() => {
                navigate(`/user/${props.id}/search`, {
                  state: { id: props.id },
                });
              }}
            >
              <SearchIcon className={classes.text} />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleLogout();
              }}
              size="small"
              className={classes.logout}
            >
              <Typography className={classes.text}>Log out</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider className={classes.divider} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}>Log out successful, redirecting...</Alert>
      </Snackbar>
    </div>
  );
}

export default Header;
