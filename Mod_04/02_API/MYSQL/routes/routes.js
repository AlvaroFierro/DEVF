module.exports = (app) => {
  const series = require("../controllers/serieController");

  // get route
  app.get("/series", series.findAll);
};
