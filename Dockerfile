FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4300

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4300"]