const Brewing = require('./repo');

function BrewingRoutes(router) {
  router.get('/',  async (ctx, next) => {
    const brewing = await Brewing.getAll();
    console.log(" cats length: " + brewing.length);
    ctx.body = " cats length: " + brewing.length;
  })

  router.post('/',  async (ctx, next) => {
    const test = {name: "1"}
    const tt = await Brewing.add(test);
    ctx.body = 'ok'; //await product.create(ctx.request.body)
  })
}

module.exports = BrewingRoutes;