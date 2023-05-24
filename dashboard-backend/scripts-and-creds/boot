sudo plesk installer --remove-everything
sudo /etc/init.d/apache2 stop

sudo systemctl daemon-reload
sudo systemctl start gunicorn.socket

sudo systemctl restart nginx