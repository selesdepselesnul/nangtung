FROM node:12.14.0-buster
LABEL maintainer="moch.deden.r@gmail.com"
RUN npm install
RUN apt-get update; \
    apt-get install -y mpg123;