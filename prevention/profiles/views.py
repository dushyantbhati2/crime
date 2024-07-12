from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404

class ProfileDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        user = get_object_or_404(User, username=pk)
        profile = get_object_or_404(Profile, user=user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
