FROM node:16-alpine as frontend
WORKDIR /app
COPY /public .
RUN yarn
EXPOSE 3000
CMD [ "yarn", "start" ]

#docker build . -t portefolio:dev
#docker run -p 3000:3000 -d portefolio:dev
#docker system prune
