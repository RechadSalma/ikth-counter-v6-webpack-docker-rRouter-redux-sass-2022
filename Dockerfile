FROM node:alpine
WORKDIR '/iKapp'
COPY package.json ./
RUN echo 'iKdockers' && npm run ikupdate
COPY . .
CMD npm run dev
EXPOSE 3000
