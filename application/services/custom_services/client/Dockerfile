FROM node:14.11.0-alpine
COPY . /client
WORKDIR /client
RUN npm install
RUN npm i -g ts-node
CMD npm run prod