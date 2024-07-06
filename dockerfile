FROM node:14-alpine
WORKDIR /portfolio
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# get this project on DockerHub: docker pull suyashdev30/portfolio