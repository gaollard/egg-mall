const Controller = require('egg').Controller

class BrandController extends Controller {
  async list() {
    const brandService = this.service.brand
    this.ctx.body = await brandService.list()
  }
}

module.exports = BrandController