/*书籍表 */
const model = {
    name: 'book',
    schema: {
        name: String,// 书名
        tags: [String],// 类别
        desc: String,// 作品简介
        banner_image: String,// 详情banner
        cover_image: String,// 封面
        reward_num: {
            type: Number,
            default: 0
        },// 打赏人数
        source_cdn: String,// chapter 图片cdn来源

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