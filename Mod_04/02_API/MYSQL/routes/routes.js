module.exports = (app) => {
  const series = require("../controllers/SerieController.js");

  //get route
  app.get("/series", series.findAll);
};
