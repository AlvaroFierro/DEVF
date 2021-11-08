const Serie = require("../models/Serie");

exports.findAll = (req, res) => {
  Serie.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving series.",
      });
    else res.send(data);
  });
};
