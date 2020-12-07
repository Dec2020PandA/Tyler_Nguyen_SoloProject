const { Drink } = require("../models/drink.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Tapped into drink database",
  });
};

module.exports.createDrink = (request, response) => {
  const {
    drinkId,
    drinkName,
    drinkIngredients,
    drinkInstructions,
  } = request.body;
  Drink.create({
    drinkId,
    drinkName,
    drinkIngredients,
    drinkInstructions,
  })
    .then((drink) => response.json(drink))
    .catch((err) => response.json(err));
};

module.exports.getAllDrinks = (request, response) => {
  Drink.find({})
    .then((drinks) => response.json(drinks))
    .catch((err) => response.json(err));
};

module.exports.getDrink = (request, response) => {
  Drink.findOne({ _id: request.params.id })
    .then((drink) => response.json(drink))
    .catch((err) => response.json(err));
};

module.exports.updateDrink = (request, response) => {
  Drink.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedDrink) => response.json(updatedDrink))
    .catch((err) => response.json(err));
};

module.exports.deleteDrink = (request, response) => {
  Drink.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
