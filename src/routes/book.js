const Router = require('koa-router')
const Book = require('../controllers/book')

const router = Router({
    prefix: '/api/book'
})

router.post('/list', Book.list)

router.post('/chapterList', Book.chapterList)

module.exports = router