/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  router.get('/common/getSfCityList', controller.common.getSfCityList)
  router.get('/category', controller.category.list)
  router.get('/brand', controller.brand.list)
  router.get('/product', controller.product.list)
  router.get('/product/:productId', controller.product.item)

  // 用户注册
  router.post('/user/register', controller.user.register)
  // 用户登录
  router.post('/user/login', controller.user.login)
  // 获取用户信息
  router.post('/user/getUserInfo', controller.user.getUserInfo)
  // 获取我的收获地址
  // 添加收获地址
  // 删除收获地址
  // 更新用户信息
  // 上传头像

  router.get('/order', controller.order.list)
  router.post('/order', controller.order.add)
}
