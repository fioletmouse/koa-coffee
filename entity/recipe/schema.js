const mng = require('../../mongo/mongoose-connection');

var recipeSchema = new mng.Schema({
  name: String,
  desc: String
});

var Recipe = mng.model('Recipe', recipeSchema);

module.exports = Recipe;