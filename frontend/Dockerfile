FROM node:18.15.0-alpine3.17 as base

ENV NODE_ENV=production

LABEL maintainer=kexxu

COPY *.json ./

#RUN npm install -g yarn@latest

RUN apk add tini --no-cache \
	&&  yarn config list \
	&&  yarn install --frozen-lockfile \
#	&&  outdated \
	&&  yarn cache clean

ENTRYPOINT ["tini", "--"]

###DEV###
FROM base as dev

ENV PATH /node_modules/.bin:$PATH

ENV NODE_ENV=development

RUN yarn install && yarn cache clean

COPY . ./frontend

WORKDIR /frontend

CMD ["", "start"] 

###PRE-PROD###
FROM dev as build

RUN yarn build

###TEST###
FROM dev as test

CMD ["", "run", "test"]

###AUDIT###
FROM test as audit

CMD ["", "run", "audit"]

###PROD###
FROM nginx:1.23.3-alpine as prod

COPY --chown=nginx:nginx --from=build ./frontend/dist ./build

COPY default.conf /etc/nginx/conf.d/

COPY .env ./.env

HEALTHCHECK  --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=3 --spider http://127.0.0.1:4343/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
