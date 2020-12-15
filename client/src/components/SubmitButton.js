import React from "react";

import Button from "@material-ui/core/Button";

function SubmitButton(props) {
  const { buttonTitle, buttonColor, isDisabled } = props;
  return (
    <Button
      disabled={isDisabled}
      variant="contained"
      type="submit"
      color={buttonColor}
      style={{ margin: 10 }}
    >
      {buttonTitle}
    </Button>
  );
}

export default SubmitButton;
