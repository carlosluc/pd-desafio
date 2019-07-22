module.exports = function(app) {
  var collection = require('../controllers/collectionController.js');
  var disco = require('../controllers/discoController.js');

  app.route('/collection')
    .get(collection.findAll)
    .post(collection.create)

  app.route('/collection/:id')
    .get(collection.findBy)

  app.route('/disc')
    .post(disco.create);
  
   app.route('/disc/:id')
    .get(disco.findBy)
    .post(disco.update)
    .delete(disco.delete);
};