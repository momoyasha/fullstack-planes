from django.db import models


class Plane(models.Model):
    id = models.AutoField(primary_key=True)
    model = models.TextField(blank=False, null=False)
    active = models.BooleanField(default=True)
    latitude = models.FloatField(blank=False, null=False)
    longitude = models.FloatField(blank=False, null=False)
    updated_at = models.DateTimeField(blank=False, null=False)

    