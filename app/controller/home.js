const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.service.product.list()
  }
}

module.exports = HomeController
