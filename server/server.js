const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("../server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

require("../server/routes/drink.route")(app);
require("../server/routes/user.route")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
