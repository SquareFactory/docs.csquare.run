FROM nginx:alpine

COPY docker/docusaurus /etc/nginx/sites-enabled/
COPY build/ /var/www/docs.csquare.run/