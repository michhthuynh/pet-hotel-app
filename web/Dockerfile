FROM node:13-alpine

WORKDIR /index
COPY ./package*.json ./
COPY ./yarn.lock ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]