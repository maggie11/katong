/*评论表 */
const model = {
    name: 'comment',
    schema: {
        chapterid: String,// 章节编号
        content: String,// 评论内容
        userid: String,// 用户编号
        wx: {
            headurl: String,// 头像
            nickname: String,// 昵称
        },

        is_delete: {
            type: Boolean,
            default: false
        },

        create_time: {
            type: Number,
            default: Date.now()
        }
    }
}

module.exports = model