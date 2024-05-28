from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import ProfileSerializer,PostSerializer
from .serializers import userSerializers
from ..models import Profile
from django.shortcuts import get_object_or_404
from rest_framework import status
from .. import models
import requests
import json
from django.http import JsonResponse
from django.conf import settings
# from langchain.chat_models import ChatOpenAI
# from langchain.schema import (
#     AIMessage,
#     HumanMessage,
#     SystemMessage
# )
class LoginView(APIView):
    def post(self, request):
        
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.filter(email=email).first()
        

        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            user.save()
            serializer = userSerializer(user)
            return Response({'refresh': str(refresh), 'access': str(refresh.access_token), 'user': serializer.data})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class SignupView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        password2 = request.data.get('cnfpassword')
        username = request.data.get('username')

        if password != password2:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        new_user = User.objects.create_user(username=username, email=email)
        new_user.set_password(password)
        new_user.save()
        
        serializer = userSerializer(new_user)
        return Response({'user': serializer.data})


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

class CompleteProfile(APIView):
    def post(self,request):
        username=request.data.get('username')
        gender=request.data.get('gender')
        occupation=request.data.get('occupation')
        new_user=User.objects.get(username=username)
        new_user_profile=models.Profile.objects.create(user=new_user,gender=gender,occupation=occupation)
        new_user_profile.save()
        return Response({'Sucess':'Sucessfully created profile'})



def fetch_coordinates(district_dict,demand_state):
    district = district_dict['district'] + ','+demand_state+',India'
    ans=requests.get(f'https://geocode.maps.co/search?q={district}&api_key=6606f2a2e4dd1326692138pxc82a5e6').json()
    lat=ans[0]['lat']
    lon=ans[0]['lon']
    district_dict['lat'] = lat
    district_dict['lon'] = lon
    

class map(APIView):
    
    def post(self,request):
        demand_state=request.data.get('state')
        json_file_path = settings.BASE_DIR / 'data.json'
        print(demand_state)
        with open(json_file_path, 'r') as file:
            data = json.load(file)
        organised={}
        for i in data:
            state=i['States/UTs']
            district=i['District']
            total=i['Total Cognizable IPC crimes']
            if district == 'Total':
                continue
            if total < 1000:
                color='green'
            elif total < 2000:
                color='yellow'
            elif total < 5000:
                color='orange'
            else:
                color='red'
            if state in organised:
                organised[state].append({'district':district,'total':total,'color':color})
            else:
                organised[state]=[{'district':district,'total':total,'color':color}] 
        
        if demand_state not in organised:
            return Response({'error':'enter a correct state'},status=status.HTTP_404_NOT_FOUND)
        threads = []
        addcor=organised[demand_state]
        for i in addcor:
            thread = threading.Thread(target=fetch_coordinates, args=(i,demand_state))
            threads.append(thread)
            thread.start()
            time.sleep(2)

        for thread in threads:
            thread.join()

        return Response({'data':organised[demand_state]},status=status.HTTP_200_OK) 

class posts(APIView):
    def get(self,request,pk=None):
        posts=models.Post.objects.all()
        serializer=PostSerializer(posts,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        username=request.data.get('username')
        description=request.data.get('description')
        files=request.files.get('files')

        user=User.objects.get(username=username)
        new_post=models.Post.objects.create(post_user=user,description=description,files=files)
        new_post.save()
        return Response({'Sucess':'Sucess'})
    
    def delete(self,request,pk):
        post=models.Post.objects.get(post_id=pk)
        post.delete()
        return Response({'Sucess':'Post deleted'})
