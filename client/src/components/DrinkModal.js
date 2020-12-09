import React, { useState } from "react";

import GButton from "./GButton";
import Modal from "@material-ui/core/Modal";

function DrinkModal(props) {
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <img src={props.results.strDrinkThumb + "/preview"} alt={"blue"} />
        {props.results.strDrink}
      </div>
      <GButton buttonTitle="Add to favorites" buttonColor="secondary" />
    </Modal>
  );
}

export default DrinkModal;
