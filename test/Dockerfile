FROM node:10

RUN npm install node-rest-client

COPY . .

ENV IP = 0.0.0.0

CMD ["sh", "-c", "node testApi.js ${IP}"]