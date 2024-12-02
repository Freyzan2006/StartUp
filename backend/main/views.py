from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework import permissions

from rest_framework import viewsets
from main.serializers import UserSerializer

def hi(request):
     
    if request.method == "GET":
        return JsonResponse({"message":"Hello World"})
    else:
        return JsonResponse({"message":"Not Found"})


class UsersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer