FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

ENTRYPOINT ["yarn", "start"]
