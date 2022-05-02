FROM node:16

WORKDIR /app

ADD . /app

RUN yarn

CMD ./startup.sh