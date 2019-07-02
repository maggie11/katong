/**
 * 中间件
 */
const { getResponse } = require('../helpers')

const checkLogin = async (ctx, next) => {
    const { wx } = ctx.request.body
    let user = null
    user = await models_katong.user.findOne({'wx.openid': wx.openid})
    if(!user) {
        user = await models_katong.user.create({wx: wx})
    }
    if(user) {
        ctx.session.sessionid = user.wx.openid
        ctx.session.currentUser = user
        next()
    } else {
        ctx.body = getResponse(false, 'e002')
    }
}