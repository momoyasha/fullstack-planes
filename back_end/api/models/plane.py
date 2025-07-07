from django.db import models
from django.utils import timezone

class Plane (models.Model):
    # id = models.AutoField(primary_key=True)
    serial_number = models.TextField(blank=False, null=False)
    model = models.TextField(blank=False, null=False)
    active = models.BooleanField(blank=False, null=False, default=False)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(blank=False, null=False, default=timezone.now)
    updated_at = models.DateTimeField(blank=False, null=False, default=timezone.now)