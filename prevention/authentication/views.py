from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import userSerializers
from django.contrib.auth import authenticate
from profiles.models import Profile
# Create your views here.

class LoginView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self,request):
        try:
            username=request.data.get('email')
            password=request.data.get('password')
            if(not username or not password):
               return Response({'Error':'all fields are required'},status=status.HTTP_400_BAD_REQUEST)
            user=get_object_or_404(User,email=username)
            user=authenticate(username=user.username,password=password,request=request)
            if user is not None:
                refresh=RefreshToken.for_user(user)
                user.save()
                serializer=userSerializers(user)
                return Response({'refresh':str(refresh),'access':str(refresh.access_token),'user':serializer.data},status=status.HTTP_202_ACCEPTED)
            else:
                return Response({'error':'Invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'Error':f'Error occured during login {e}'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 
class SignupView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self,request):
        try:
            email=request.data.get('email')
            password=request.data.get('password')
            password2=request.data.get('cnfpassword')
            username=request.data.get('username')
            
            if not email or not password or not password2 or not username:
                return Response({'Error':'All fileds are required'},status=status.HTTP_400_BAD_REQUEST)
            
            elif password!=password2:
                return Response({'error':'Password do not match'},status=status.HTTP_400_BAD_REQUEST)

            elif User.objects.filter(email=email).exists():
                return Response({'error':'Email already exits'},status=status.HTTP_400_BAD_REQUEST)
            
            elif User.objects.filter(username=username).exists():
                return Response({'error':'Username already exits'},status=status.HTTP_400_BAD_REQUEST)
            
            
            else:
                new_user=User.objects.create_user(username=username,email=email)
                new_user.set_password(password)
                new_user.save()
                new_user_profile=Profile.objects.create(user=new_user)
                serializer=userSerializers(new_user)
                return Response({'Success':'User Signuped Successfully'},status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'Error':f'Something Went while Signing up {e}'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
