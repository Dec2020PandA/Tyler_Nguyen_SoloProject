const DrinkController = require("../controllers/drink.controller");
module.exports = function (app) {
  app.get("/api", DrinkController.index);
  app.post("/api/drink", DrinkController.createDrink);
  app.get("/api/drink", DrinkController.getAllDrinks);
  app.get("/api/drink/:id", DrinkController.getDrink);
  app.delete('/api/drink/:id', DrinkController.deleteDrink);
};
