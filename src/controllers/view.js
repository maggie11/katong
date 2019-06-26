const config = require('../../config')

const Index = async (ctx) => {
    await ctx.render('index', {jsVersion: config.jsVersion})
}

module.exports = {
    Index
}