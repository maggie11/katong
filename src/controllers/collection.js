const { getResponse } = require('../helpers')

const create = async (ctx) => {
    const { bookid } = ctx.request.body
    const { currentUser } = ctx.session

    if(await isBookFocus(bookid, currentUser._id))
    
    const res = await models_katong.collection.create({
        bookid,
        userid: currentUser._id
    })

    if(res) {
        ctx.body = getResponse(true)
    } else {
        ctx.body = getResponse(false, 'e003')
    }
}

const list = async (ctx) => {

}

const del = async (ctx) => {
    const { bookid } = ctx.request.body
    const { currentUser } = ctx.session

    const res = await models_katong.collection.delete({})
}

const isBookFocus = async (bookid, userid) => {
    const res = models_katong.collection.findOne({
        bookid,
        userid
    })
    if(res) {
        return true
    } else {
        return false
    }
}

