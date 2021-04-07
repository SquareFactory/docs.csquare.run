FROM node:alpine AS deps
COPY package.json ./
RUN npm install

FROM node:alpine AS builder
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN npm run build

FROM nginx:1.19-alpine AS runner
COPY docker/docusaurus.conf /etc/nginx/conf.d/
COPY --from=builder build/ /var/www/docs.csquare.run/