const Service = require('egg').Service;

class ProductService extends Service {

  // 分页查询
  async list(pageIndex = 1, pageSize = 10) {
    const list = await this.app.model.Product.find({})
    return {
      data: { list },
      code: '0'
    }
  }
}

module.exports = ProductService;