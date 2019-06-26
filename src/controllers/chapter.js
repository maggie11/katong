const { getResponse } = require('../helpers')

const detail = async (ctx) => {
    const { id, bookid, no } = ctx.request.body
    let query = {}

    if(id) {
        query._id = id
    }

    if(bookid) {
        query.bookid = bookid
    }

    if(no) {
        query.no = no
    }

    const chapter = await models_katong.chapter.findOne(query)

    ctx.body = getResponse(true, {
        chapter: chapter
    })
} 

module.exports = {
    detail
}