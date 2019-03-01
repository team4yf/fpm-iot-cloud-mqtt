const fpmc = require("fpmc-jssdk");
const { Func, init } = fpmc;
const assert = require('assert');

init({ appkey:'123123', masterKey:'123123', endpoint: 'http://localhost:9999/api' });

describe('Function', function(){

  it('nop', function(done){
    done();
  });

})