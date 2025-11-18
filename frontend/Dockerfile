FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx reverse proxy config
RUN printf "server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        try_files \$uri \$uri/ =404;\n\
    }\n\
    location /api {\n\
        proxy_pass http://backend:5000;\n\
    }\n\
}" > /etc/nginx/conf.d/default.conf

