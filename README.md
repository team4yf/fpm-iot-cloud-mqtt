# FPM-IOT-CLOUD-MQTT

The mqtt(a pub/sub sever) for fpm-iot-cloud.

Resend the message from an iot device to the subscribes.

## Topic Define
`#u1001/p001/nb` it for User who's id is `1001` and project id is `001` , the iot device send data from nb network.

## Payload Define
`{sn:String!,payload:Buffer!}`
sn is the device machine code, payload is the origin payload data.

## Do this before run

Copy the config.default.json as config.json

`cp config.default.json config.json`

## It can be run within a docker

## Changelog

- Add `yf-fpm-server`

- Add `Authenticate` for mqtt client
