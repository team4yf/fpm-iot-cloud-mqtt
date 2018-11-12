FROM node:8.11.1

ADD ./yarn.lock /app/yarn.lock
ADD ./nodemon.json /app/nodemon.json
ADD ./package.json /app/package.json

WORKDIR /app

EXPOSE 1883

EXPOSE 9999

RUN npm i --production --registry=https://registry.npm.taobao.org \
    && npm i -g nodemon --registry=https://registry.npm.taobao.org

# RUN npm i --production --registry=https://registry.npm.taobao.org

ENTRYPOINT ["nodemon"]

CMD ["source/app.js"]