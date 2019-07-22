var sql = require('../config/db.js');

var Collection = function(collection){
    this.name = collection.name;
};

Collection.create = function (newCollection, result) {    
        sql.query("INSERT INTO COLLECTION set ?", newCollection, function (err, res) {
                
                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res.id);
                }
            });           
};

Collection.findById = function (id, result) {
        sql.query("SELECT * FROM DISC where collectionId = ? ", id, function (err, res) {             
                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};

Collection.findAll = function (result) {
        sql.query("SELECT * FROM COLLECTION", function (err, res) {

                if(err) {
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            });   
};

module.exports= Collection;