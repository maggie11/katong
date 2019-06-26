const { getResponse } = require('../helpers')

const list = async (ctx) => {
    const list = await models_katong.book.find({})

    ctx.body = getResponse(true, {list: list})
}

const chapterList = async (ctx) => {
    const { bookid, sort = -1, pageSize = 20, page = 1 } = ctx.request.body

    if(!bookid) {
        ctx.body = getResponse(false, 'e001')
        return
    }

    const list = await models_katong.chapter
                    .find({bookid: bookid}, {like_num: 1, comment_num: 1, no: 1, create_time: 1, title: 1, cover_image: 1})
                    .sort({no: sort})
                    .skip((page -1) * pageSize)
                    .limit(+pageSize)

    ctx.body = getResponse(true, {list: list})
}

module.exports = {
    list,
    chapterList
}