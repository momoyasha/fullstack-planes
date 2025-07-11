from django.db import models

class Plane (models.Model):
    # id = models.AutoField(primary_key=True)
    serial_number = models.TextField(blank=False, null=False, unique=True)
    model = models.TextField(blank=False, null=False)
    active = models.BooleanField(blank=False, null=False, default=False)
    direction = models.FloatField(blank=True, null=True, default=0)
    speed = models.FloatField(blank=True, null=True, default=0)
    latitude = models.FloatField(blank=True, null=True, default=0)
    longitude = models.FloatField(blank=True, null=True, default=0)
    created_at = models.DateTimeField(blank=False, null=False, auto_now_add=True)
    updated_at = models.DateTimeField(blank=False, null=False, auto_now=True)