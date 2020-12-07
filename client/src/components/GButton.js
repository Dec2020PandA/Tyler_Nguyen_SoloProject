import React from "react";
import Button from "@material-ui/core/Button";

function GButton(props) {
  const { buttonTitle, buttonColor } = props;
  return (
    <Button variant="contained" color={buttonColor}>
      {buttonTitle}
    </Button>
  );
}

export default GButton;
