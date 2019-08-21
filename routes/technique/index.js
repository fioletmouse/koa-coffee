const Router = require('koa-router');
//const router = new Router();
const Kitten = require('../../mongo/schemas/kitten');

function getCats() {
  //let users = 
  //yield  Kitten.find({ name: 'fluffy' });
  return new Promise((resolve, reject) => {
     const ourCat = Kitten.find({ name: 'fluffy' });
     ourCat.exec((er, cats) => {
       if (er) {  reject(er);   }
       else { resolve(cats); }
     });        
  });
 // return user
}

function TechniquesRoutes(router) {
  router.get('hoba', '/:id', async (ctx, next) => {
    const cats = await getCats();
    console.log(ctx.params.id + " cats length: " + cats.length);
  } )
}


module.exports = TechniquesRoutes;