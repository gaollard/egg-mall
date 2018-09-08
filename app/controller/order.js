const Controller = require('egg').Controller

class OrderController extends Controller {

	// 订单查询
  async list() {
    const orderService = this.service.order
    this.ctx.body = await orderService.list()
  }

  async add () {
  	const orderService = this.service.order
  	const userService = this.service.user
  	let { loginToken } = this.ctx.request.body
  	const userInfo = await userService.getUserInfo({ loginToken })
  	this.ctx.body = {
  		data: {

  		},
  		msg: '',
  		code: '0'
  	}
  }
}

module.exports = OrderController