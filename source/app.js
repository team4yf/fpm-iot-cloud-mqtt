const mosca = require('mosca');

const server = new mosca.Server({
	port: 1883
});

server.on("clientConnected",function(client) {
	console.log("client connected",client.id);
});

server.on("clientDisconnected",function(client) {
	console.log("client clientDisconnected",client.id);
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
	console.log("mqtt is running....");
});