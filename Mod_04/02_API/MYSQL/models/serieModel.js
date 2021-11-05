const sql = require("./connection");

// create a prototype from my table (nameofseries)
// constructor
const serie = function (link) {
  this.name = link.name;
  this.seasons = link.seasons;
  this.partner = link.partner;
};

// business logic = GET, POST, PUT, DELETE

//GET

serie.getAll = (result) => {
  sql.query("SELECT * FROM nameofseries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("serie: ", res);
    result(null, res);
  });
};

//create
serie.create = (newSerie, result) => {
  // insert
  sql.query("INSERT INTO nameofseries SET ?", newSerie, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("serie: ", res);
    result(null, { ...newSerie });
  });
};

// update by id
serie.updateById = (id, newSerie, result) => {
  // update
  sql.query(
    "UPDATE nameofseries SET name = ?, seasons = ?, partner = ? WHERE id = ?",
    [newSerie.name, newSerie.seasons, newSerie.partner, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found serie with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated serie: ", res);
      result(null, { ...newSerie });
    }
  );
};

module.exports = serie;
