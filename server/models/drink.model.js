const mongoose = require("mongoose");
const DrinkSchema = new mongoose.Schema(
  {
    drinkName: { type: String },
  },
  { timestamps: true }
);
module.exports.Drink = mongoose.model("Drink", DrinkSchema);
