'use strict';
const { Fpm } = require('yf-fpm-server');

const { createMqttServer } = require('./mqtt.js');

/* The Start: Create Fpm Server */
const fpmServer = new Fpm();

const biz = fpmServer.createBiz('0.0.1');

biz.addSubModules('test', {
	// foo: async (args, ctx, before) => {
	// 	return 1
	// }
});

fpmServer.addBizModules(biz);

fpmServer.run()
	.then(fpm => {

    /* The End: Create Fpm Server */
    createMqttServer(fpm);
    /* The End: Create Mqtt Server */

	});