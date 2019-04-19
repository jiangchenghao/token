/* eslint valid-jsdoc: "off" */

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552529183757_4880';
  // token key
  config.secret = 'Your emotions are as free as gifts.';

  // add your middleware config here
  config.middleware = [];

  //数据库配置
  config.mongoose = {
		client: {
			url: 'mongodb://127.0.0.1/cangku',
			options: {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        bufferMaxEntries: 0
    }
		},
	};

  //cors跨域配置和csrf安全防范
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: false
		},
		domainWhiteList: ['http://localhost:8080']
	};
	config.cors = {
		origin:'*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	};

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
