from django.conf import settings
from django.shortcuts import render

from api.models import Event
from api.serializers import EventSerializer

from rest_framework import viewsets
from rest_framework.response import Response

import logging, requests

# Create your views here.
class EventAPIView(viewsets.ViewSet):
    serializer_class = EventSerializer
    url = 'https://api.meetup.com/React-Philly/events?sign=true&key=' + settings.KEY

    def list(self, request, *args, **kwargs):
        url = request.query_params.get('url', self.url)
        response = requests.get(url).json()

        serializer = self.serializer_class(response, many=True)

        return Response(serializer.data)
