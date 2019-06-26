/*章节表 */
const model = {
    name: 'chapter',
    schema: {
        no: Number,// 第几话
        cover_image: String,// 封面
        title: String,// 标题
        bookid: String,// 书本编号
        like_num: {
            type: Number,
            default: 0
        },// 点赞数
        comment_num: {
            type: Number,
            default: 0
        },// 评论数
        content_images: [String],//内容图片

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