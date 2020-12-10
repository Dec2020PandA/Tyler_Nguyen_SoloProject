const mongoose = require("mongoose");
const DrinkSchema = new mongoose.Schema(
  {
    drinkObject: { type: Object },
  },
  { timestamps: true }
);
module.exports.Drink = mongoose.model("Drink", DrinkSchema);
