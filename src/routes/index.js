const Router = require('koa-router')

const router = Router({
    prefix: '/katong'
})

const book = require('./book')
const chapter = require('./chapter')
const view = require('./view')

const routes = [
    book,
    chapter,
    view
]

for(route of routes) {
    router.use(route.routes(), route.allowedMethods())
}

module.exports = router