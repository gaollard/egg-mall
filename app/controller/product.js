const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    this.ctx.body = await this.service.product.list()
  }
}

module.exports = ProductController;