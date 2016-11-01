from django.db import models

# Create your models here.
class Event(models.Model):
    event_id = models.IntegerField()
    name = models.TextField()
    venue = models.TextField()
    group = models.TextField()
    rsvp_limit = models.IntegerField()
    status = models.TextField()
    waitlist_count = models.IntegerField()
    yes_rsvp_count = models.IntegerField()
    link = models.URLField()
    description = models.TextField()
    visibility = models.TextField()
    created = models.TextField()
    duration = models.TextField()
    time = models.TextField()
    updated = models.TextField()
    utc_offset = models.IntegerField()
