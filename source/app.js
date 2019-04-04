'use strict';
const { Fpm } = require('yf-fpm-server');
const path = require('path');
const Views = require('koa-view');
/* The Start: Create Fpm Server */
const fpmServer = new Fpm();

const biz = fpmServer.createBiz('0.0.1');

biz.addSubModules('test', {});

fpmServer.addBizModules(biz);

fpmServer.run()
  .then(fpm => {
    const { app } = fpm;

    app.use(Views( path.join(fpm.get('CWD'), "views")))
    const router = fpm.createRouter();
    router.get('/debug', async (ctx ) => {
      await ctx.render('index')
    })

    fpm.bindRouter(router);
  });