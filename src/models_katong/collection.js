/*收藏表 */
const model = {
    name: 'collection',
    schema: {
        bookid: String,// 书籍编号
        userid: String,// 用户编号
        last_chapter: String,//最后预览章节

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