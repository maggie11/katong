const Router = require('koa-router')
const Chapter = require('../controllers/chapter')

const router = Router({
    prefix: '/api/chapter' 
})

router.post('/detail', Chapter.detail)

module.exports = router