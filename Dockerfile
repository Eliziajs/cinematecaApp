FROM node:18.17.1 as front
#ENV FRONT_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install && mv node_modules
COPY . .
RUN npm run build

EXPOSE 4200

FROM nginx:alpine
#VOLUME /var/cache/nginx
COPY --from=front /app/dist/cinemateca-app /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf