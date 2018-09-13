var should = require("chai").should();
var YF = require("yf-fpm-client-js").default;
YF.init({ appkey:'123123', masterKey:'123', domain: 'http://localhost:9999' });

describe('Function', function(){

  it('mqtt.publish', function(done){
    var func = new YF.Func('mqtt.publish');
    func.invoke({topic: '#u1001/p1001/tcp', payload: '0304050607'})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  })

  it('mqtt.clients', function(done){
    var func = new YF.Func('mqtt.clients');
    func.invoke({})
      .then(function(d){
        console.log(d);
        done();
      }).catch(function(err){
        done(err);
      });
  
  })

})