/*打赏表 */
const model = {
    name: 'reward',
    schema: {
        userid: String,// 用户编号
        bookid: String,// 书籍编号
        amount: Number,// 打赏金额
        wx: {
            headurl: String,// 头像
            nickname: String,// 昵称
        },

        create_time: {
            type: Number,
            default: Date.now()
        }
    }
}

module.exports = model