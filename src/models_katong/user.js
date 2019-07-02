/*用户表 */
const model = {
    name: 'user',
    schema: {
        wx: {
            headurl: String,// 头像
            nickname: String,// 昵称
            openid: String
        },

        create_time: {
            type: Number,
            default: Date.now()
        }
    }
}

module.exports = model