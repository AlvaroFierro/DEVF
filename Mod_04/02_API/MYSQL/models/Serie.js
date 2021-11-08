const sql = require("./connection");

//create a prototype from my table Series
// constructor
const Serie = function (newSerie) {
  this.name = newSerie.name;
  this.seasons = newSerie.seasons;
  this.partners = newSerie.partners;
};

// empty comment
// bussiness logic = GET,POST,PUT && DELETE

// GET
Serie.getAll = (result) => {
  //select from the table
  sql.query("SELECT * FROM nameofseries", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("Series:", res);
    result(null, res);
  });
};

//create
Serie.create = (newSerie, result) => {
  //insert
  sql.query("INSERT INTO nameofseries SET ?", newSerie, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    //return success + entity(Name,Seasons,Partners)
    console.log("created serie with success:", { ...newSerie });
    result(null, { ...newSerie });
  });
};

// update by Id
Serie.updateById = (id, newSerie, result) => {
  //Update
  sql.query(
    "UPDATE nameofseries SET name=?, seasons =?, partners=? WHERE id =?",
    [newSerie.name, newSerie.seasons, newSerie.partners, id],
    (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found serie with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated serie with success:", { ...newSerie });
      result(null, { ...newSerie });
    }
  );
};

module.exports = Serie;
