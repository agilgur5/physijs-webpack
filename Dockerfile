FROM node:5.4

# install node requirements
COPY ./package.json /code/package.json
WORKDIR /code
RUN npm install -qq

# run watch script
CMD npm run watch
