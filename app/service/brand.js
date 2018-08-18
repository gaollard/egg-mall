const Service = require('egg').Service;

class BrandService extends Service {

  // 分页查询
  async list(pageIndex = 1, pageSize = 10) {
    console.log(this.app.model)
    const list = await this.app.model.Brand.find({})
    return {
      data: { list },
      code: '0'
    }
  }
}

module.exports = BrandService;