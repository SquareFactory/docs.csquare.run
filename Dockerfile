FROM node:alpine AS builder
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.19-alpine AS runner
COPY docker/docusaurus.conf /etc/nginx/conf.d/
COPY --from=builder build/ /var/www/docs.csquare.run/