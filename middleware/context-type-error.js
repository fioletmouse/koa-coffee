
module.exports  = async (ctx, next) => {
  await next()

  ctx.assert.equal('object', typeof ctx, 500, 'There is an issue with context. Please, check the logs')
}

