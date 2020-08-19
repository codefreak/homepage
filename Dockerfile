FROM node:lts as build
COPY . /build
WORKDIR /build
RUN yarn install && env NODE_ENV=production yarn build

FROM nginx:stable
COPY --from=build /build/dist /usr/share/nginx/html
