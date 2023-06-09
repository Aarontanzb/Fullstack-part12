FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN npm ci --only=production

ENV DEBUG=playground:*

USER node
CMD npm start