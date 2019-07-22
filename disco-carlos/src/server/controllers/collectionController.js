var Collection = require('../models/collectionModel.js');

exports.findAll = function(req, res) {
  Collection.findAll(function(err, collection) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', collection);
    res.send(collection);
  });
};

exports.create = function(req, res) {
  var new_collection = new Collection(req.body);

   if(!new_collection.name){
        res.status(400).send({ error:true, message: 'Please provide all infos' });
   }
    else{
        Collection.create(new_collection, function(err, collection) {
            if (err)
            res.send(err);
            res.json(collection);
        });
    }
};

exports.findBy = function(req, res) {
  Collection.findById(req.params.id, function(err, collection) {
    if (err)
      res.send(err);
    res.json(collection);
  });
};
