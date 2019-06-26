/*订单表 */
const model = {
    name: 'order',
    schema: {
        userid: String,// 用户编号
        bookid: String,// 书籍编号
        has_pay: {
            type: Boolean,
            default: false
        },// 是否购买
        amount: Number,// 金额

        create_time: {
            type: Number,
            default: Date.now()
        }
    }
}

module.exports = model