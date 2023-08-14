### STAGE 1: Build ###

FROM node:18.12 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

### STAGE 2: Run ###

FROM nginx:1.17.1-alpine AS server

# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/coppel-test-front-end/ /usr/share/nginx/html

EXPOSE 80

# Iniciar el servidor Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
