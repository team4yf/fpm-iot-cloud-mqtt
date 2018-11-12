FROM node:8.11.1

# ADD ./package-lock.json /app/package-lock.json
ADD ./node_modules /app/node_modules
ADD ./package.json /app/package.json
ADD ./source /app/source

WORKDIR /app

EXPOSE 1883

EXPOSE 9999

# RUN npm i --production

ENTRYPOINT ["node"]

CMD ["source/app.js"]