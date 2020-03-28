FROM node:13

MAINTAINER Simon Breiter hello@simonbreiter.com

# Setup project folder
RUN mkdir -p /usr/src/color-name
WORKDIR /usr/src/color-name

# Add project files
ADD . /usr/src/color-name

EXPOSE 3000
