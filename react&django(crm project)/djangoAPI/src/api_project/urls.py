from django.contrib import admin
from django.urls import path, include
from core.views import TestView

from core.views import PostView, PostCreateView, PostListCreateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('create/', PostCreateView.as_view(), name='create'),
    path('admin/', admin.site.urls),
    path('', TestView.as_view(), name="test")
]

