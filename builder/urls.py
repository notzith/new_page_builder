
from django.urls import path
from .views import index, page_creator

urlpatterns = [
    path('', index, name='index'),
    path('creator/', page_creator, name='page_creator')
]