const mng = require('../mongoose-connection');

var kittySchema = new mng.Schema({
  name: String
});

var Kitten = mng.model('Kitten', kittySchema);

module.exports = Kitten;