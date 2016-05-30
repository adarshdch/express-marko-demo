//input - Input data - Simple javascript object
//out - Wrapper around writable output stream
var template = require('./template.marko');

module.exports = function(input, out){
  var name = input.greetingName;
  var count = input.messageCount;
  if(name) {
    name = name.toUpperCase();
  } else{
    name = '(no name)';
  }
  template.render({
    greetingName: name,
    messageCount: count
  }, out);
};
