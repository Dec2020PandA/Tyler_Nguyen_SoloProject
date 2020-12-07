import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function Dashboard(props) {
  const [drinks, setDrinks] = useState("");
  return (
    <div>
      <Typography>dashboard</Typography>
    </div>
  );
}

export default Dashboard;
