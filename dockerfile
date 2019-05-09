FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY FrontEnd/dist /usr/src/app/views

RUN npm install
RUN npm install ejs -g

COPY . .

EXPOSE 8080


CMD [ "npm", "start" ]