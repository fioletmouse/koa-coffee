const mng = require('../mongoose-connection');

var blendSchema = new mng.Schema({
  name: String
});

var Blend = mng.model('Blend', blendSchema);

module.exports = Blend;