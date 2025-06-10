FROM node:20-alpine

WORKDIR /app

COPY package*.json .

npm run install

COPY . .

EXPOSE 4200

CMD ["npm","run","start"]