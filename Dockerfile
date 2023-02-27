FROM node:18-alpine
ENV PORT 3000
ENV NODE_ENV production
WORKDIR /app
COPY . /app/
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["npm", "start"]