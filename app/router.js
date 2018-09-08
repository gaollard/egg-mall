/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  router.get('/category', controller.category.list)
  router.get('/brand', controller.brand.list)
  router.get('/product', controller.product.list)

  router.post('/user/login', controller.user.login)
  router.post('/user/getUserInfo', controller.user.getUserInfo)

  router.post('/order', controller.order.add)
}
