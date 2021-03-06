const Service = require('egg').Service;

class BrandService extends Service {

  // 分页查询
  async list(pageIndex = 1, pageSize = 10) {
    const list = await this.app.model.Order.find({})
    return {
      data: { list },
      code: '0'
    }
  }

  // 创建订单
  async add({ userId, payment, orderItems }) {
  	const list = await this.app.model.Order.find({})
  	const creator = new this.app.model.Order({
  		userId,
  		orderItems,
      payment
  	})
    const creatorResult = await creator.save()
    return creatorResult
  }
}

module.exports = BrandService;