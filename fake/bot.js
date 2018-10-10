const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883', {
	username: 'admin',
	password: '123123123',
});

setInterval(function() {
	client.publish('$s2d/nb/youren/push', Buffer.from('000000010000000200000002ffffffff01020304', 'hex'), { qos: 1, retain: true});
},10000);

client.subscribe('$s2d/nb/youren/push');
client.on('message', (topic, payload) => {
	console.log(topic, payload)
})