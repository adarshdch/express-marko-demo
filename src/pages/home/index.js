var template = require('./template.marko');

module.exports = function(req, res){
  template.render({
    greetingName: 'Adarsh Kumar'
  }, res);
};