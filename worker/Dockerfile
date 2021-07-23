FROM node:14.14.0-alpine

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY . .

# The only difference here is that we run start instead of dev
CMD ["npm", "run", "start"]