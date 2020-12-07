const DrinkController = require("../controllers/drink.controller");
module.exports = function (app) {
  app.get("/api", DrinkController.index);
  app.post("/api/Drink", DrinkController.createDrink);
  app.get("/api/Drink", DrinkController.getAllDrinks);
  app.get("/api/Drink/:id", DrinkController.getDrink);
  app.put('/api/Drink/:id', DrinkController.updateDrink);
  app.delete('/api/Drink/:id', DrinkController.deleteDrink);
};
