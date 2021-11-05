const serie = require("../models/serieModel.js");

exports.findAll = (req, res) => {
  serie.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    else res.send(data);
  });
};
