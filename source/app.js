'use strict';
const { Fpm } = require('yf-fpm-server');

/* The Start: Create Fpm Server */
const fpmServer = new Fpm();

const biz = fpmServer.createBiz('0.0.1');

biz.addSubModules('test', {});

fpmServer.addBizModules(biz);

fpmServer.run()
	.then(fpm => { });