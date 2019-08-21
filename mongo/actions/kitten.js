// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   console.log('qwe');
// });
const Kitten = require('../../mongo/schemas/kitten');

function getCats() {
  return Kitten.find({ name: 'fluffy' }).exec();
}


module.exports = {
  getCats
}