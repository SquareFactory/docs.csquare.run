FROM nginx:alpine

COPY docker/docusaurus.conf /etc/nginx/conf.d/
COPY build/ /var/www/docs.csquare.run/