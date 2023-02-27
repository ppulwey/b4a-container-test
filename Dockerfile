FROM node:18-alpine
ENV PORT 3000
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]