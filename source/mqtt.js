'use strict';
const mosca = require('mosca');
const _ = require('lodash');

const createMqttServer = fpm =>{

  const clients = [];

  /* The Start: Create Mqtt Server */
  const options = fpm.getConfig('mqtt', { port: 1883 })

  const authedUsers = fpm.getConfig('auth', [['admin', '123123123']])
  
  const server = new mosca.Server(options);

  server.on("clientConnected",function(client) {
    fpm.logger.info(client.id, ' connect');
    clients.push(client.id)
  // TODO: save the client
  });

  server.on("clientDisconnected",function(client) {
  // console.log("client clientDisconnected",client.id);
  // TODO: remove the client
    _.remove(clients, (id) => client.id == id)
    fpm.logger.error(client.id, ' disconnected');
  });

  server.on('ready',function() {
    fpm.logger.info(`MQTT Server is running at :${options.port}....`);
    server.authenticate = (client, username, password, callback) => {
      let flag = false;
      for(let i = 0; i < authedUsers.length; i++){
        if(username === authedUsers[i][0] && password.toString() === authedUsers[i][1]){
          flag = true;
          break;
        }
      }
      if (flag) {
        client.user = username;
      }
      callback(null, flag);
    };
  });

  fpm.extendModule('mqtt', {
    clients: args => {
      return {
        total: clients.length,
        rows: clients,
      };
    }
  })

  return server;
}

exports.createMqttServer = createMqttServer;
