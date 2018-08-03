FROM node:8-alpine

WORKDIR /usr/src/app

RUN apk update && \
  apk add -U \
  	bash && \
  rm -rf /var/cache/apk/*

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
