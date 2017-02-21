from api.models import Event

from rest_framework import serializers

import datetime, json

class EventDateTime(serializers.DateTimeField):
    def to_representation(self, value):
        value /= 1000.0
        return datetime.datetime.fromtimestamp(value)

class EventSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    venue = serializers.DictField()
    group = serializers.DictField()
    # rsvp_limit = serializers.IntegerField()
    status = serializers.CharField()
    waitlist_count = serializers.IntegerField()
    yes_rsvp_count = serializers.IntegerField()
    link = serializers.URLField()
    description = serializers.CharField()
    visibility = serializers.CharField()
    created = EventDateTime()
    # duration = serializers.CharField()
    time = EventDateTime()
    updated = EventDateTime()
    utc_offset = serializers.IntegerField()
