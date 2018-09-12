const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

const data = Buffer.from([0x01,0x02,0x03,0x04])
const payload = {topic: '#u1001/p1001/tcp', payload: data.toString('hex')}

setInterval(function() {
	client.publish('ding', JSON.stringify(payload), { qos: 1, retain: true});
},10000);
