# specify a base image
FROM node:alpine as builder

# install some dependancies
WORKDIR '/server/ui'
COPY ./package.json ./
RUN npm install
COPY ./ ./

# set up a default command
RUN npm run build

# Second stage
FROM nginx

COPY --from=builder /server/ui/build /usr/share/nginx/html

# default start nginx container