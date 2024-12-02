from django.urls import path, include
from . import views

from main.routers import router

urlpatterns = [
   path('main/',views.hi),  
   path('main/', include(router.urls)),
]
