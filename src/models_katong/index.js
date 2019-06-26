const mongoose = require('mongoose')
const { mongoUri, mongoUriParam } = require('../../config')

mongoose.Promise = global.Promise

const conn = mongoose.createConnection(`${mongoUri}`)

const db = {}

const tag = require('./tag')
const book = require('./book')
const chapter = require('./chapter')
const reward = require('./reward')
const order = require('./order')
const user = require('./user')
const collection = require('./collection')
const comment = require('./comment')
const like = require('./like')
const wish = require('./wish')

const models = [
    tag,
    book,
    chapter,
    reward,
    order,
    user,
    collection,
    comment,
    like,
    wish
]

for (model of models) {
    const newSchema = new mongoose.Schema(typeof model.schema === 'function' && model.schema(mongoose.Schema) || model.schema, { collection: model.name })
    db[model.name] = conn.model(model.name, newSchema)
}

module.exports = db