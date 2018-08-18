// 品牌 Schema

module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const brandSchema = new mongoose.Schema({
    // 品牌名称
    brandName: {
      type: String,
      default: ''
    },
    // 品牌ID
    brandId: {
      type: Number,
      default: ''
    },
    // 品牌LOGO
    brandLogo: {
      type: String,
      default: ''
    },
    // 类目Id
    categoryId: {
      type: String,
      default: ''
    },
    // 类目名称
    categoryName: {
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
  return mongoose.model('book_brand', brandSchema)
}