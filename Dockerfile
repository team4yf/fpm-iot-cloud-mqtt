FROM node:10.15.3-alpine

ADD ./package.json /app/package.json
ADD ./config.default.json /app/config.json
ADD ./source /app/source
ADD ./views /app/views

WORKDIR /app

EXPOSE 1883

EXPOSE 9999

EXPOSE 8001

RUN npm i --production

ENTRYPOINT ["node"]

CMD ["source/app.js"]