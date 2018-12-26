#! /bin/sh
docker build -t fpm-mqtt-server .

docker tag fpm-mqtt-server yfsoftcom/fpm-mqtt-server:latest

docker push yfsoftcom/fpm-mqtt-server:latest