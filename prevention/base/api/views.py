<<<<<<< HEAD
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer
=======
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import ProfileSerializer
from .serializers import userSerializers
from ..models import Profile
from django.shortcuts import get_object_or_404
from rest_framework import status
from .. import models

class LoginView(APIView):
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        user=User.objects.filter(email=email).first()

        if user and user.check_password(password):
            refresh=RefreshToken.for_user(user)
            user.save()
            serializer=userSerializers(user)
            return Response({'refresh':str(refresh),'access':str(refresh.access_token),'user':serializer.data})
        else:
            return Response({'error':'Invalid credentials'},status=400)


class SignupView(APIView):
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        password2=request.data.get('cnfpassword')
        username=request.data.get('username')
        gender=request.data.get('gender')
        occupation=request.data.get('occupation')

        if password!=password2:
            return Response({'error':'Password do not match'},status=status.HTTP_400_BAD_REQUEST)

        elif User.objects.filter(email=email).exists():
            return Response({'error':'Email already exits'},status=status.HTTP_400_BAD_REQUEST)
        
        elif User.objects.filter(username=username).exists():
            return Response({'error':'Username already exits'},status=status.HTTP_400_BAD_REQUEST)
        
        else:
            new_user=User.objects.create_user(username=username,email=email)
            new_user.set_password(password)
            new_user.save()
            new_user_profile=models.Profile.objects.create(user=new_user,gender=gender,occupation=occupation)
            new_user_profile.save()
            
            refresh=RefreshToken.for_user(new_user)
            serializer=userSerializers(new_user)
            return Response({'refresh':str(refresh),'access':str(refresh.access_token),'user':serializer.data})

        


class Profile_detail(APIView):
    def get(self,request,pk):
        curr_user=User.objects.get(username=pk)
        profile = Profile.objects.get(user=curr_user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

class TokenRefreshView(APIView):
    def post(self, request):
        refresh_token=request.data.get('refresh_token')
        token=RefreshToken(refresh_token)
        access_token=str(token.access_token)
        return Response({'access_token': access_token}, status=status.HTTP_200_OK)



>>>>>>> origin/backend
