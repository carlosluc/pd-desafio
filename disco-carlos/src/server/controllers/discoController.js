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
  var new_disco = new Task(req.body);

   if(!new_disco.id){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
   }
    else{
        Disco.create(new_task, function(err, disco) {
            if (err)
            res.send(err);
            res.json(disco);
        });
    }
};


exports.findBy = function(req, res) {
  Disco.findBy(req.params.id, function(err, disco) {
    if (err)
      res.send(err);
    res.json(disco);
  });
};


exports.put = function(req, res) {
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