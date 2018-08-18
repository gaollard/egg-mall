
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(controller.product.list)
  router.get('/', controller.home.index);
  router.get('/category', controller.category.list);
  router.get('/brand', controller.brand.list);
  router.get('/product', controller.product.list);
};
