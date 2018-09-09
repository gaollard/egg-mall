const Controller = require('egg').Controller

class ProductController extends Controller {

  async list() {
    this.ctx.body = await this.service.product.list()
  }

  async item () {
  	let { productId } = this.ctx.params
  	const productService = this.service.product
  	const productInfo = await productService.item({ productId })
  	this.ctx.body = {
  		data: productInfo,
  		msg: '',
  		code: '0'
  	}
  }
}

module.exports = ProductController