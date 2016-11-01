from api.views import EventAPIView

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'events', EventAPIView, base_name='event_view')
