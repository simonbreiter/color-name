FROM node:7

MAINTAINER Simon Breiter hello@simonbreiter.com

# Setup project folder
RUN mkdir -p /usr/src/color-name
WORKDIR /usr/src/color-name

# Add project files
ADD . /usr/src/color-name

EXPOSE 3000

RUN npm install
RUN npm run build
