FROM node:16.13.1-alpine

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install
RUN yarn install

COPY . .

EXPOSE 8080


CMD ["npm", "run", "serve"]