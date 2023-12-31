FROM node:20-bullseye-slim
LABEL maintainer="Karlos Helton Braga <Konkah>"

RUN apt update \
  && DEBIAN_FRONTEND=noninteractive apt install -y \
    net-tools \
    nano \
    curl \
    unzip \
    libpq-dev \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config \
  && apt clean \
  && rm -rf /var/lib/apt/lists/*

RUN apt upgrade -y \
  && apt autoremove -y \
  && apt autoclean -y

WORKDIR /var/www
COPY ./FRONT/package.json package.json
RUN corepack enable


EXPOSE 8000

CMD npm install && npm start || tail -f /dev/null
