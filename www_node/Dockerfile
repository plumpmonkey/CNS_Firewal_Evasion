FROM ubuntu:22.04
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /app

RUN apt update  \
    && apt -y install  \
        apache2 \
        nano   \
        binutils \
        curl \
        iproute2 \
        iputils-ping \
        net-tools    \
        gnupg \
        iptables \ 
        ncat

RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -

RUN apt-get -y install nodejs

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080 

CMD ["npm", "start"]
