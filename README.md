# FPM-IOT-CLOUD-MQTT

The mqtt(a pub/sub sever) for fpm-iot-cloud.

## Do this before run

Copy the config.default.json as config.json

`cp config.default.json config.json`

## It can be run within a docker

## RUN

### pm2
`$ npm run run:pm2`

the ports definded in the config.json file

### docker
`$ npm run run:docker`

the default mqtt port is `1883`

### Run with docker
- singleton

```bash
$ docker run -d \
   -p 1883:1883 \
   -p 8001:8001 \
   -p 9999:9999 \
   --restart=always \
   --name fpm-mqtt-server \
   yfsoftcom/fpm-mqtt-server:latest
```

- docker-compose
```yml
mqttserver:
  image: 'yfsoftcom/fpm-mqtt-server'
  container_name: "fpm-iot-cloud-mqtt-server"
  volumes:
    - ./config.json:/app/config.json
    - ./logs/app.log:/app/logs/app.log
  ports:
    - "1883:1883"
  environment:
    MQTT_DEBUG: 1
    MQTT_AUTH: '{"admin":"123123123"}'
  networks:
    - mqtt-network
  restart: always
```


## Changelog

- Add in `docker-compose.yml`
  - restart: always
  - container_name: "fpm-iot-cloud-mqtt-server"

- Add `yf-fpm-server`

- Add `Authenticate` for mqtt client
