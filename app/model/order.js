// 订单 Schema

module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const schema = new mongoose.Schema({
    // 买家ID
    userId: {
    	type: Number,
      default: 0
    },
    // 订单ID
    orderId: {
      type: Number,
      default: 0
    },
    // 实付金额(分)
    payment: {
      type: Number,
      default: 0
    },
    // 支付类型
    paymentType: {
    	type: Number, //1. 支付宝; 2. 微信
    	default: 1
    },
    // 订单明细表
    orderItems: {
    	type: Array,
    	default: []
    },
    // 邮费(分)
    postFee: {
    	type: Number,
    	default: 1000
    },
    // 订单状态 1.未付款 2.已付款 3.未发货 4.已发货 5.交易成功 6.交易关闭
    orderStatus: {
    	type: Number,
    	default: 1
    },
    // 创建时间
    createTime: {
      type: Date,
      default: Date.now
    },
    // 更新时间
    updateTime: {
      type: Date,
      default: Date.now
    }
  })
  return mongoose.model('book_order', schema)
}