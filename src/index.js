const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const MongoStore = require("koa-session-mongo2")
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')

const router = require('./routes')
const config = require('../config')

const app = new Koa()

app.use(logger())

app.use(bodyParser({}))

app.use(views(__dirname + '/views' , {
    map: {
        html: 'lodash'
    }
}))

app.use(static(
    path.join(__dirname, '../static')
))

app.use(session({
    store: new MongoStore(config.sessionURL),
    signed: false,
    maxAge: 24 * 60 * 60 * 1000
}, app))

//使用router
app.use(router.routes(), router.allowedMethods())

//使用models
global.models_katong = require('./models_katong')

app.listen(config.port)