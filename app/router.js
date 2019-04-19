'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isadmin = app.middleware.isAdmin();
  router.get('/', controller.home.index);
  router.get('/show', isadmin,controller.index.show);
  router.post('/add', controller.index.add);
  router.put('/update/:_id', controller.index.update);
  router.delete('/delete/:_id', controller.index.delete);

  // router.post('/upload', controller.user.index);
	router.post('/user/login', controller.user.login);
	router.post('/user/create', controller.user.create);
	router.get('/user/find', controller.user.find);
	router.put('/user/update', controller.user.update);
	router.delete('/user/delete', controller.user.delete);
};
