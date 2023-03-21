
from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    # path('creator/', head_creator, name='page_creator'),
    # path('modified/', page_modified),
    path('head/', head_creator,name="head_creator"),
    path('para/', para_creator,name="para_creator"),
    path('link/', link_creator,name="link_creator"),
    path('image/', image_creator,name="image_creator")
    # path('video/', video_creator)
]
