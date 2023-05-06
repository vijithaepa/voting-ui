# specify a base image
FROM node:alpine as builder

# install some dependancies
WORKDIR '/server/ui'
COPY ./package.json ./
RUN npm install
COPY ./ ./

RUN npm run build

#second stage
FROM node:alpine as runner
WORKDIR '/server/ui'

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# set up a default command
#RUN npm run build

COPY --from=builder --chown=nextjs:nodejs /server/ui/.next ./.next
COPY --from=builder /server/ui/node_modules ./node_modules
COPY --from=builder /server/ui/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
