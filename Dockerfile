FROM node:18-alpine
ENV PORT 3333
ENV NODE_ENV production
WORKDIR /app
COPY . /app/
RUN yarn install --production=false
RUN yarn build
EXPOSE 3333
CMD ["npm", "start"]