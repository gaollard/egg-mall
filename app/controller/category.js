const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async list() {
    this.ctx.body = await this.service.category.list()
  }
}

module.exports = CategoryController;