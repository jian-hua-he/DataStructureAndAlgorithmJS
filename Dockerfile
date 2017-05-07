# Build form node latest
FROM node:latest

# Use bin/bash instead bin/sh
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install basic tools
RUN apt-get update && apt-get install -y \
    vim \
    locate \
    curl \
    bash \
    git

# Install yarn with npm
RUN npm install -g yarn

# Install webpack with yarn
RUN yarn global add webpack
