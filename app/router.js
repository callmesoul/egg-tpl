'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.auth.index);


  router.resources('activity', '/api/activity', controller.activity);
  router.resources('order', '/api/order', controller.order);
  router.resources('comment', '/api/comment', controller.comment);
  router.resources('rebate', '/api/rebate', controller.rebate);
  router.resources('user', '/api/user', controller.user);
};
