# select image
FROM node:12.13.1-alpine
WORKDIR /usr/src/app

# install deps and run application
ENV NPM_CONFIG_LOGLEVEL verbose
CMD ["sh", "-c", "npm install && npm run start"]
