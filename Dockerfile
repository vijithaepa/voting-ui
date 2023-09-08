# specify a base image
FROM node:alpine as builder

# install some dependancies
WORKDIR '/server/ui'
COPY ./package.json ./
RUN npm install
COPY ./ ./

# set up a default command
RUN npm run build

# set up a default command
ENTRYPOINT ["npm","run","start"]

# Second stage
#FROM nginx
##Elastic beans talk will look for port for expose
#EXPOSE 80

#COPY --from=builder /server/ui/build /usr/share/nginx/html

# default start nginx container