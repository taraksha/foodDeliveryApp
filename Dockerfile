# Stage 1: Build the Angular app
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# note run npm build didnt work. i ran it manually

# Stage 2: Serve the Angular app using Nginx(light weight web server)
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# daemon off makes the web server nginx to run in the foreground