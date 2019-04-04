#! /bin/sh
docker build -t yfsoftcom/fpm-mqtt-server:latest .

docker push yfsoftcom/fpm-mqtt-server:latest