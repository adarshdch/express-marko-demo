var template = require('./template.marko');

module.exports = function(req, res){
  template.render({
    greetingName: 'Adarsh Kumar',
    colors: ["Red", "Blue", "Green"] 
  }, res);
};
