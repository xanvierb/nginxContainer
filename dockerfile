FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY src/ /usr/share/nginx/html
RUN chmod 777 /var/cache/nginx -R
