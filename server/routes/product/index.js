const router = require('koa-router')()
const list = require('./list')

router.get('/', async (ctx) => {
    ctx.body = {
        data: ['beij', 'tianj']
    }
    console.log(111)
})

router.use('/list', list.routes(), list.allowedMethods())

module.exports = router