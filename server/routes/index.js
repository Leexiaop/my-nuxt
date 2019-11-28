const router = require('koa-router')()
const product = require('./product/index')
const user = require('./user/index')

router.use('/product', product.routes(), product.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router