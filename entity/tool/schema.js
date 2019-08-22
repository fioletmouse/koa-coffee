const mng = require('../../mongo/mongoose-connection');

var toolSchema = new mng.Schema({
  name: String
});

var Tool = mng.model('Tool', toolSchema);

module.exports = Tool;