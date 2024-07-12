from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth import authenticate
# Create your views here.

class LoginView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self,request,format=None):
        username=request.data.get('email')
        password=request.data.get('password')
        user=User.objects.get(email=username)
        user=authenticate(username=user.username,password=password,request=request)
        if user is not None:
            refresh=RefreshToken.for_user(user)
            user.save()
            serializer=userSerializers(user)
            return Response({'refresh':str(refresh),'access':str(refresh.access_token),'user':serializer.data})
        else:
            return Response({'error':'Invalid credentials'},status=400)
 
class SignupView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        password2=request.data.get('cnfpassword')
        username=request.data.get('username')
        # gender=request.data.get('gender')
        # occupation=request.data.get('occupation')

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
            new_user_profile=models.Profile.objects.create(user=new_user)
            new_user_profile.save()
            
            # new_user_profile=models.Profile.objects.create(user=new_user,gender=gender,occupation=occupation)
            # new_user_profile.save()
            
            # refresh=RefreshToken.for_user(new_user)
            serializer=userSerializers(new_user)
            return Response({'user':serializer.data})

