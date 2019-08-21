const Kitten = require('../../mongo/actions/kitten');


function TechniquesRoutes(router) {
  router.get('hoba', '/:id',  async (ctx, next) => {
    const cats = await Kitten.getCats();
    console.log(ctx.params.id + " cats length: " + cats.length);
    ctx.body = ctx.params.id + " cats length: " + cats.length;
  })
}

module.exports = TechniquesRoutes;