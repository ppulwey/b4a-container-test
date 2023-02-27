FROM node:lts-alpine
ENV PORT 3000
WORKDIR /app
COPY [".", "./"]
RUN npm install
RUN npm run build
COPY ./dist .
EXPOSE 3000
CMD ["npm", "start"]