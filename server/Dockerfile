FROM node:18.17.0

WORKDIR /usr/src/app

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
