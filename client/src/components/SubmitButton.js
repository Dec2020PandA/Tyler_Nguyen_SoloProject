import React from "react";

import Button from "@material-ui/core/Button";

function SubmitButton(props) {
  const { buttonTitle, buttonColor } = props;
  return (
    <Button variant='contained' type="submit" color={buttonColor}>
      {buttonTitle}
    </Button>
  );
}

export default SubmitButton;
