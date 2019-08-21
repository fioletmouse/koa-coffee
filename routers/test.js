const Router = require('koa-router');
const router = new Router();
const Kitten = require('../mongo/schemas/kitten');



function *getCats() {
  //let users = 
  yield  Kitten.find({ name: 'fluffy' });
  // return new Promise((resolve, reject) => {
  //    const ourCat = Kitten.find({ name: 'fluffy' });
  //    ourCat.exec((er, cats) => {
  //      if (er) {  reject(er);   }
  //      else { resolve(cats); }
  //    });        
  // });
 // return user
}

router.get('hoba', '/:id', async (ctx, next) => {
  const cats = await getCats();
  console.log(cats);
} )

module.exports = router;