const mongoose = require("mongoose");
const DrinkSchema = new mongoose.Schema(
  {
    drinkId: { type: Number },
    drinkName: { type: String },
    drinkIngredients: { type: Array },
    drinkInstructions: { type: String },
  },
  { timestamps: true }
);
module.exports.Drink = mongoose.model("Drink", DrinkSchema);
