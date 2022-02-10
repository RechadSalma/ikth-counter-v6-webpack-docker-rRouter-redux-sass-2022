# npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh && npm outdated

docker build -t iktest . && \
docker run -d -p 5000:9000 iktest npm run dev \
docker container ps \
docker top