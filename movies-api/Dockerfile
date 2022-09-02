FROM node:16.17.0-alpine

# Docker working directory
WORKDIR /usr/src/app

# Copying file into APP directory of docker
COPY package*.json /usr/src/app/

# Then install the NPM module
RUN npm install 

# Copy current directory to APP folder
COPY . /usr/src/app/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]