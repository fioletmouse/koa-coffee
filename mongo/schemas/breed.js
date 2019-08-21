const mng = require('../mongoose-connection');

var breedSchema = new mng.Schema({
  name: String
});

var Breed = mng.model('Breed', breedSchema);

module.exports = Breed;