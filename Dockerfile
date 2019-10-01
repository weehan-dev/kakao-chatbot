FROM node:10
MAINTAINER changhoi <changhoi0522@gmail.com>

RUN mkdir /root/app

WORKDIR /root/app

EXPOSE 4000

CMD [ "npm", "run", "dev:local" ]