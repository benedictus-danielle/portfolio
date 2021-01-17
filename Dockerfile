FROM node:latest
WORKDIR /var/www/portfolio-bd
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
COPY . .
