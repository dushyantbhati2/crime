from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from . import models
# Create your views here.

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
    