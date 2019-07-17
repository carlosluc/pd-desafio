module.exports = function(app) {
  var disco = require('../controllers/discoController.js');

  app.route('/disco')
    .get(disco.findAll)
    .post(disco.create);
   
   app.route('/disco/:id')
    .get(disco.findBy)
    .delete(disco.delete);
};