# build from this 
FROM node:14.15-alpine

# make a folder in this container
RUN mkdir -p /src/app

# declare where source code is
WORKDIR /src/app

# declare what code to copy | where to put it
COPY . /src/app

# Install dependencies
RUN npm install
RUN npm run build
# RUN npm run seed

# expose a port
EXPOSE 3002

# run commands
CMD [ "npm", "run", "start" ]
