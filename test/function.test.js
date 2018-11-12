var should = require("chai").should();
var YF = require("yf-fpm-client-js").default;
YF.init({ appkey:'123123', masterKey:'123', domain: 'http://localhost:9999' });

describe('Function', function(){

  it('nop', function(done){
    done();
  });

})