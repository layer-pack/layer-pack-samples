FROM node:8.12.0-alpine


RUN mkdir /home/app

RUN apk --no-cache update \
        && apk add --no-cache \
        python \
        make \
        g++ \
        automake \
        autoconf \
        zlib-dev \
        mongodb-tools \
        bash \
        rsync \
        git




CMD cd /home/app && npm i && npm run start-dev || bash

