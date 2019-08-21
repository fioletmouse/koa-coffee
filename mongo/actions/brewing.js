const Brewing = require('../../mongo/schemas/brewing');

function getAll() {
  return Brewing.find({}).exec();
}

function getById(id) {
  return Brewing.findById(id).exec();
}

function add(data) {
  let docs = data;
  if(!Array.isArray(docs)) {
    docs = [data];
  }

  return Brewing.create(docs);
}


module.exports = {
  getAll,
  getById,
  add
}