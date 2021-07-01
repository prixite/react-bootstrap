FROM node:16-slim
WORKDIR /opt/source/
RUN npm install --global standard
COPY . ./
