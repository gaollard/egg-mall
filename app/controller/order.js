const Controller = require('egg').Controller

class OrderController extends Controller {

	// 订单查询
  async list() {
    const orderService = this.service.order
    this.ctx.body = await orderService.list()
  }

  // 创建订单
  async add () {
  	const orderService = this.service.order
  	const userService = this.service.user
  	let { loginToken } = this.ctx.request.body
  	const userInfo = await userService.getUserInfo({ loginToken })
  	const ret = await orderService.add({
  		userId: userInfo._id,
  		payment: 300000,
  		orderItems: []
  	})
  	this.ctx.body = {
  		data: ret,
  		msg: '',
  		code: '0'
  	}
  }
}

module.exports = OrderController