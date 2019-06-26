/*类别表 */
const model = {
    name: 'tag',
    schema: {
        name: String,// 类别名称

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