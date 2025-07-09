from api.models.plane import Plane
from rest_framework import serializers

class PlaneSerializer (serializers.Serializer):
    id = serializers.IntegerField()
    serial_number = serializers.CharField()
    model = serializers.CharField()
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()