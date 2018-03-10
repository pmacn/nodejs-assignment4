FROM node:9.8.0-alpine
RUN mkdir -p /code
WORKDIR /code
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["npm", "start"]