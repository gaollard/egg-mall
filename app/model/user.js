// 用户 Schema

module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const userSchema = new mongoose.Schema({
    // 用户昵称
    username: {
      type: String,
      default: ''
    },
    // 手机号码
    mobile: {
      type: String,
      default: ''
    },
    // 登录密码
    password: {
      type: String,
      default: ''
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
  return mongoose.model('book_user', userSchema)
}