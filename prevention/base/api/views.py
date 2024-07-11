from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import ProfileSerializer,PostSerializer,CommentSerializer,BookmarkSerializer,CommunitySerializer
from .serializers import userSerializers,replySerializer
from ..models import Profile
from django.shortcuts import get_object_or_404
from rest_framework import status
from .. import models
import requests 
import json
from django.http import JsonResponse
from django.conf import settings
from django.shortcuts import redirect
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
import time
import threading
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

class Profile_detail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
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


def fetch_coordinates(district_dict,demand_state):
    district = district_dict['district'] + ','+demand_state+',India'
    ans=requests.get(f'https://geocode.maps.co/search?q={district}&api_key=6606f2a2e4dd1326692138pxc82a5e6').json()
    lat=ans[0]['lat']
    lon=ans[0]['lon']
    district_dict['lat'] = lat
    district_dict['lon'] = lon

class map(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
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
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, pk=None):
        posts = models.Post.objects.all().order_by('-upload_time')
        serializer = PostSerializer(posts, many=True,context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        description = request.data.get('description')
        files = request.FILES.getlist('files')
        # username=request.data.get('username')
        user = request.user
        # user=models.User.objects.get(username=username)
        new_post = models.Post.objects.create(post_user=user, description=description)
        new_post.save()
        for file in files:
            post_file = models.PostFile.objects.create(post=new_post, file=file)
            post_file.save()
        return Response({'Success': 'Post created'})

    def delete(self, request, pk):
        post = models.Post.objects.get(post_id=pk)
        post.delete()
        return Response({'Success': 'Post deleted'})

class comments(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, pk):
        post1=models.Post.objects.get(post_id=pk)
        comments = models.Comments.objects.filter(post=post1).order_by('-upload_time')
        serializer = CommentSerializer(comments, many=True)
        print(request.user)
        return Response(serializer.data)
    def delete(self,request,pk):
        comment=models.Comments.objects.get(id=pk)
        comment.delete()
        return Response({'Success':"Comment successfully deleted"})
    def post(self,request,pk):
        post=models.Post.objects.get(post_id=pk)
        user = request.user
        content=request.data.get('content')
        files=request.FILES.get('files',None)
        if files is None:
            comment=models.Comments.objects.create(comment_user=user,content=content,post=post)
            comment.save()
        else:
            comment=models.Comments.objects.create(comment_user=user,content=content,post=post,files=files)
            comment.save()
        return Response({"Success":"Comment added"})

class Reply(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,pk):
        comment=models.Comments.objects.get(id=pk);
        replies=models.Reply.objects.filter(comment=comment)
        serial=replySerializer(replies,many=True)
        return Response(serial.data)
    
    def post(self,request,pk=None):
        try:
            if pk is None:
                return Response({'Error':'Comment id not passed in url'},status=status.HTTP_400_BAD_REQUEST)
            content=request.data.get('content')
            if content is None:
                return Response({'Error':'Description of comment is required'},status=status.HTTP_400_BAD_REQUEST)
            user=request.user
            comment=models.Comments.objects.filter(id=pk).first()
            if comment is None:
                return Response({'Error':'Error fetching the comment'},status=status.HTTP_403_FORBIDDEN)
            
            new_reply=models.Reply.objects.create(comment=comment,reply_user=user,content=content)

            return Response({'Sucess':'Reply sucessfully created'},status=status.HTTP_201_CREATED)
        except:
            return Response({'Error':'Error during creating reply'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def delete(self,request,reply_id):
        try:
            reply=models.Reply.objects.get(id=reply_id)
            reply.delete()
            return Response({'Sucess':'Reply succesfully deleted'},status=status.HTTP_200_OK)
        except:
            return Response({'Error':'Something went wrong while deleting'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
class Likes(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self,request,pk):
        post=models.Post.objects.get(post_id=pk)
        user = request.user
        if models.LikesPost.objects.filter(like_user=user,post=post).exists():
            return Response({'Error':'User has already liked'},status=status.HTTP_400_BAD_REQUEST)
        likes=models.LikesPost.objects.create(like_user=user,post=post)
        post.likes+=1
        post.save()
        return Response({'likes':post.likes})
    def delete(self,request,pk):
        post = models.Post.objects.get(post_id=pk)
        user = request.user
        likes = models.LikesPost.objects.get(like_user=user,post=post)
        likes.delete()
        post.likes-=1
        post.save()
        return Response({'likes':post.likes,'liked_user':user.username})
            

class Bookmark(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request):
        user = request.user
        bookmarks=models.BookmarkPost.objects.filter(bookmark_user=user)
        serializer=BookmarkSerializer(bookmarks,many=True)
        return Response(serializer.data)
    def post(self,request,pk):
        post=models.Post.objects.get(post_id=pk)
        user = request.user
        bookmarks=models.BookmarkPost.objects.create(bookmark_user=user,post=post)
        bookmarks.save()
        return Response({'Success':'Successfully bookmarked '})
    def delete(self,request,pk):
        post = models.Post.objects.get(post_id=pk)
        user=request.user
        bookmarks=models.BookmarkPost.objects.get(bookmark_user=user,post=post)
        bookmarks.delete()
        return Response({'Success':'Successfully deleted'})     

class Community(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,pk=None):
        communities=models.Community.objects.all()
        serializer=CommunitySerializer(communities,many=True)
        return Response(serializer.data)
    def post(self,request):
        user= request.user
        com_description = request.data.get('com_description')
        com_name= request.data.get('com_name')
        com_image = request.FILES.get('com_image')
        community = models.Community.objects.create(com_user=user,com_name=com_name,com_description=com_description,com_image=com_image)
        community.save()
        return Response({'success':'Successfully Created Community'})
        
    def delete(self,request,pk):
        community = models.Community.objects.get(com_id=pk)
        community.delete()
        return Response({'Succes':'Deleted Community'})

