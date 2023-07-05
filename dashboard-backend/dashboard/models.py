from django.db import models


# Create your models here.
class Dashboard(models.Model):
    name = models.TextField()
    telefon = models.TextField(null=True, blank=True)
    email = models.TextField()
    produkt = models.TextField(null=True, blank=True)
    status = models.TextField(null=True, blank=True)
    score = models.TextField(null=True, blank=True)
    quelle = models.TextField(null=True, blank=True)
    datum = models.DateTimeField(null=True, blank=True)
    email_view = models.TextField(blank=True, default='')
    # first_name = models.CharField(max_length=30)
    # last_name = models.CharField(max_length=30)
#     mac_address = models.TextField()
#     first_use_date = models.DateTimeField(null=True)
#     # is_subscribed = models.BooleanField(default=False)
#
#
# class Subscription(models.Model):
#     mac_address = models.TextField()
#     start_date = models.DateTimeField(null=True)
#     end_date = models.DateTimeField(null=True)
