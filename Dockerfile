# FROM node:alpine
FROM node:17.4-alpine3.15
WORKDIR '/iKapp'
COPY package.json ./
RUN echo 'iKdockers' && node -v && npm run ikupdate
COPY . .
RUN echo 'iKdockersPRODS' && npm run build
CMD node src/server.js
EXPOSE 3000
