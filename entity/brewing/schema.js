const mng = require('../../mongo/mongoose-connection');

var brewingSchema = new mng.Schema({
  name: String
});

var Brewing = mng.model('Brewing', brewingSchema);

module.exports = Brewing;