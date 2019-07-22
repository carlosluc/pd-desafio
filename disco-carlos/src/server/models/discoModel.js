var sql = require("../config/db.js");

var Disco = function(disco) {
  this.name = disco.name;
  this.band = disco.band;
  this.collectionId = disco.collectionId;
};

Disco.create = function(newDisco, result) {
  sql.query("INSERT INTO DISC set ?", newDisco, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.id);
    }
  });
};

Disco.findById = function(id, result) {
  sql.query("SELECT * FROM DISC WHERE id = ? ", id, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Disco.updateById = function(id, disco, result) {
  sql.query(
    "UPDATE DISC SET name = ?, band = ? WHERE id = ?",
    [disco.name, disco.band, id],
    function(err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Disco.delete = function(id, result) {
  sql.query("DELETE FROM DISC WHERE id = ?", [id], function(err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Disco;
