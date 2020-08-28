# build environment
FROM node:14.3.0-buster-slim as build

# Add a user, best practice to not run as root:
RUN adduser --gecos "" --disabled-password debian

# Common apt stuff
RUN apt-get update && \
  apt-get install -y nano curl wget && \
  npm install && \
  npm install --save material-ui-icons

WORKDIR /home/debian/webserver

RUN mkdir /home/debian/.config && \
  chown -R debian:$(id -gn debian) /home/debian/.config

COPY package.json /home/debian/webserver/package.json
COPY package-lock.json /home/debian/webserver/package-lock.json

RUN npm ci
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /home/debian/webserver/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
