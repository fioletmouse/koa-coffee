const mng = require('../mongoose-connection');

var recipeSchema = new mng.Schema({
  name: String,
  desc: String
});

var Recipe = mng.model('Recipe', recipeSchema);

module.exports = Recipe;