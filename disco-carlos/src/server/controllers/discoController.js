var Disco = require('../models/discoModel.js');

exports.findAll = function(req, res) {
  Disco.findAll(function(err, disco) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', disco);
    res.send(disco);
  });
};

exports.create = function(req, res) {
  var new_disco = new Disco(req.body);

   if(!new_disco.id){
        res.status(400).send({ error:true, message: 'Please provide all infos' });
   }
    else{
        Disco.create(new_disco, function(err, disco) {
            if (err)
            res.send(err);
            res.json(disco);
        });
    }
};


exports.findBy = function(req, res) {
  Disco.findById(req.params.id, function(err, disco) {
    if (err)
      res.send(err);
    res.json(disco);
  });
};


exports.update = function(req, res) {
  Disco.updateById(req.params.id, new Disco(req.body), function(err, disco) {
    if (err)
      res.send(err);
    res.json(disco);
  });
};


exports.delete = function(req, res) {
  Disco.delete( req.params.id, function(err, disco) {
    if (err)
      res.send(err);
    res.json({ message: 'Disco successfully deleted' });
  });
};