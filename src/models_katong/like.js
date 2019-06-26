/*点赞记录表 */
const model = {
    name: 'like',
    schema: {
        chapterid: String,// 章节编号
        userid: String,// 用户编号

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