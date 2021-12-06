FROM httpd

# Create and install SSL cert
RUN apt-get update
RUN apt-get install openssl
RUN openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj "/C=ES/ST=MAD/L=MAD/O=HOLA/CN=localhost" -keyout ./server.key -out ./server.crt
RUN cp server.key /usr/local/apache2/conf/.
RUN cp server.crt /usr/local/apache2/conf/.
RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        conf/httpd.conf

# Fix "Could not reliably determine the server's fully qualified domain name"
#RUN echo 'ServerName 127.0.0.1' >> /usr/local/apache2/conf/

# Add vhost
ADD ./vhost.conf /opt/docker/etc/httpd/vhost.common.d/vhost.conf

# Anothers
WORKDIR /app
