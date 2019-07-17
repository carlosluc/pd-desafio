var sql = require('../config/db.js');

var Disco = function(disco){
    this.id = disco.id;
};

Disco.create = function (newDisco, result) {    
        sql.query("INSERT INTO disco set ?", newDisco, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.id);
                    result(null, res.id);
                }
            });           
};

Disco.findById = function (id, result) {
        sql.query("Select * from disco where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};

Disco.findAll = function (result) {
        sql.query("Select * from disco", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('disco : ', res);  

                 result(null, res);
                }
            });   
};

Disco.updateById = function(id, disco, result){
  sql.query("UPDATE disco SET disco = ? WHERE id = ?", [disco.id, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Disco.remove = function(id, result){
     sql.query("DELETE FROM disco WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Disco;