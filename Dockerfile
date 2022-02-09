# FROM node:alpine
FROM node:17.4-alpine3.15
WORKDIR '/iKapp'
COPY package.json ./
RUN echo 'iKdockers' && node -v && npm run ikupdate
COPY . .
CMD node -v && npm run prod
EXPOSE 3000
