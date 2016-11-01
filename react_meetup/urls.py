from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from api.urls import router

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),

    # API views
    url(r'^api/', include(router.urls), name='api-root'),
]
