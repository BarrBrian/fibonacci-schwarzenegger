FROM node:14.14.0-alpine

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY . .

# The only thing different between this and the dev is the Startup Command
CMD ["npm", "run", "start"]