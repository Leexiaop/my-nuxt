const router = require('koa-router')()

router.get('/', async (ctx) => {
    ctx.body = {
        data: {
            name: 'xiaoming',
            age: 23
        }
    }
})

module.exports = router