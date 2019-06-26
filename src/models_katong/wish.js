/**
 * 心愿表
 */

const model = {
    name: 'wish',
    schema: {
        user_id: String, // 用户编号
        name: String, // 书籍名称
        cover_images: [], // 相关图片
        desc: String, // 描述
        status: {
            type: Number,
            default: 0
        }, // 状态 0 待实现 1 实现
        reward: String, // 打赏编号

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