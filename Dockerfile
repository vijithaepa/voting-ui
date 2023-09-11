# specify a base image
FROM node:slim as builder

# install some dependancies
WORKDIR '/server/ui'
COPY ./package.json package-lock.json ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH '/server/ui/node-modules/.bin:$PATH'
COPY ./ ./

# set up a default command
RUN npm run build

#EXPOSE 3000

# set up a default command
ENTRYPOINT ["npm","run","start"]

# Second stage
#FROM nginx
##Elastic beans talk will look for port for expose
#EXPOSE 80

#COPY --from=builder /server/ui/build /usr/share/nginx/html

# default start nginx container