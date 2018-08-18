const Controller = require('egg').Controller;

class BrandController extends Controller {
  async list() {
    this.ctx.body = await this.service.brand.list()
  }
}

module.exports = BrandController;