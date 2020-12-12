const { Drink } = require("../models/drink.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Tapped into drink database",
  });
};

const strDrinkZHHANS = "strDrinkZH-HANS";
const strDrinkZHHANT = "strDrinkZH-HANT";
const strInstructionsZHHANS = "strInstructionsZH-HANS";
const strInstructionsZHHANT = "strInstructionsZH-HANT";

module.exports.createDrink = (request, response) => {
  const { drinkObject } = request.body;
  Drink.create({
    drinkObject,
  })
    .then((drink) => response.json(drink))
    .catch((err) => response.json(err));
};

module.exports.getAllDrinks = (request, response) => {
  Drink.find({}, null, { sort: { name: 1 } })
    .then((drinks) => response.json(drinks))
    .catch((err) => response.json(err));
};

module.exports.getDrink = (request, response) => {
  Drink.findOne({ _id: request.params.id })
    .then((drink) => response.json(drink))
    .catch((err) => response.json(err));
};

module.exports.deleteDrink = (request, response) => {
  Drink.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
