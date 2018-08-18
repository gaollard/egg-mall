// 类目 Category

module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const categorySchema = new mongoose.Schema({
    // 类目名称
    categoryName: {
      type: String,
      default: ''
    },
    // 类目ID
    categoryId: {
      type: Number,
      default: ''
    },
    // 类目LOGO
    categoryLogo: {
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
  return mongoose.model('book_category', categorySchema)
}