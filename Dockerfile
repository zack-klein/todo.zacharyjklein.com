FROM node:14.3.0-buster-slim

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

USER debian

CMD ["bash", "scripts/entrypoint.sh"]
