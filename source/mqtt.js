'use strict';
const mosca = require('mosca');
const _ = require('lodash');

const createMqttServer = fpm =>{

  const clients = [];

  /* The Start: Create Mqtt Server */
  const server = new mosca.Server({
    port: 1883
  });

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

  server.on("published",function(packet, client) {//当客户端有连接的时候，发布主题消息
    var topic = packet.topic;
      // should save the payload?
    switch(topic) {
      case 'ding':
        //mqtt转发主题消息
        server.publish(Object.assign(JSON.parse(packet.payload) , { qos: packet.qos, retain: packet.retain}));
        break;
    }
  });

  server.on('ready',function() {
    fpm.logger.info('MQTT Server is running....')
  });

  fpm.extendModule('mqtt', {
    publish: args => {
      server.publish(Object.assign({ qos: 1, retain: false }, args));
      return 1;
    },
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
