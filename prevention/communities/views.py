from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from . import models
from .serializers import (
    BookmarkSerializer,
    CommentSerializer,
    CommunitySerializer,
    FollowSerializer,
    PostSerializer,
    ReplySerializer,
)

# Create your views here.


class Community(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk is None:
            communities = models.Community.objects.select_related("com_user").all()
            serializer = CommunitySerializer(communities, many=True)
            return Response(serializer.data)
        else:
            com = get_object_or_404(models.Community, com_id=pk)
            serializer = CommentSerializer(com)
            return Response(serializer.data)

    def post(self, request):
        data = {
            "com_name": request.data.get("com_name"),
            "com_description": request.data.get("com_description"),
            "com_image": request.FILES.get("com_image"),
        }
        serializer = CommunitySerializer(data=data)
        if serializer.is_valid():
            serializer.save(com_user=request.user)
            return Response(
                {"success": "Successfully Created Community"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        community = get_object_or_404(models.Community, com_id=pk)
        if community.com_user != request.user:
            return Response(
                {"Error": "You dont have permission to delete this community"},
                status=status.HTTP_403_FORBIDDEN,
            )
        try:
            community.delete()
            return Response({"Succes": "Deleted Community"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class posts(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk is None:
            try:
                posts = (
                    models.Post.objects.select_related("post_user")
                    .all()
                    .order_by("-upload_time")
                )
                serializer = PostSerializer(
                    posts, many=True, context={"request": request}
                )
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(
                    {"Error": f"An error occurred: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        else:
            try:
                post = get_object_or_404(models.Post, post_id=pk)
                serializer = PostSerializer(post, context={"request": request})
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(
                    {"Error": f"An error occurred: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

    def post(self, request):
        data = {
            "description": request.data.get("description"),
            "files": [{"file": file} for file in request.FILES.getlist("files")],
        }
        serializer = PostSerializer(data=data, context={"request": request})
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(
                    {"Success": "Post created"}, status=status.HTTP_201_CREATED
                )
            except Exception as e:
                return Response(
                    {"Error": f"An error occurred: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            post = get_object_or_404(models.Post, post_id=pk)
            post.delete()
            return Response({"Success": "Post deleted"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class Likes(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        try:
            post = get_object_or_404(models.Post, post_id=pk)
            user = request.user
            if models.LikesPost.objects.filter(like_user=user, post=post).exists():
                return Response(
                    {"Error": "User has already liked"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            likes = models.LikesPost.objects.create(like_user=user, post=post)
            post.likes += 1
            post.save()
            return Response({"likes": post.likes}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def delete(self, request, pk):
        try:
            post = get_object_or_404(models.Post, post_id=pk)
            user = request.user
            likes = get_object_or_404(models.LikesPost, like_user=user, post=post)
            likes.delete()
            post.likes -= 1
            post.save()
            return Response({"likes": post.likes}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class comments(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            post1 = get_object_or_404(models.Post, post_id=pk)
            comments = (
                models.Comments.objects.select_related("comment_user")
                .filter(post=post1)
                .order_by("-upload_time")
            )
            if not comments.exists():
                return Response(
                    {"Error": "There are no comments"},
                    status=status.HTTP_204_NO_CONTENT,
                )
            serializer = CommentSerializer(
                comments, many=True, context={"request": request}
            )
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def delete(self, request, pk):
        try:
            comment = get_object_or_404(models.Comments, id=pk)
            comment.delete()
            return Response(
                {"Success": "Comment successfully deleted"}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def post(self, request, pk):
        post = get_object_or_404(models.Post, post_id=pk)
        serializer = CommentSerializer(
            data=request.data, context={"request": request, "post": post}
        )
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(
                    {"Success": "Comment Created"}, status=status.HTTP_201_CREATED
                )
            except Exception as e:
                return Response(
                    {"Error": f"An error occurred: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Reply(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            comment = get_object_or_404(models.Comments, id=pk)
            replies = models.Reply.objects.prefetch_related("reply_user").filter(
                comment=comment
            )
            serial = ReplySerializer(replies, many=True, context={"request": request})
            return Response(serial.data)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def post(self, request, pk):
        comment = get_object_or_404(models.Comments, id=pk)
        serializer = ReplySerializer(
            data=request.data, context={"request": request, "comment": comment}
        )
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(
                    {"Sucess": "Reply sucessfully created"},
                    status=status.HTTP_201_CREATED,
                )
            except:
                return Response(
                    {"Error": "Error during creating reply"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

    def delete(self, request, reply_id):
        try:
            reply = get_object_or_404(models.Reply, id=reply_id)
            reply.delete()
            return Response(
                {"Sucess": "Reply succesfully deleted"}, status=status.HTTP_200_OK
            )
        except:
            return Response(
                {"Error": "Something went wrong while deleting"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class CommentLike(APIView):
    def post(self, request, reply_id):
        try:
            comment = None
            reply = None
            try:
                comment = get_object_or_404(models.Comments, id=reply_id)
            except:
                reply = get_object_or_404(models.Reply, id=reply_id)

            if comment:
                like, created = models.CommentAndReplyLike.objects.get_or_create(
                    comment=comment, user=request.user
                )
            elif reply:
                like, created = models.CommentAndReplyLike.objects.get_or_create(
                    Reply=reply, user=request.user
                )

            if not created:
                if comment:
                    comment.likes -= 1
                    comment.save()
                else:
                    reply.likes -= 1
                    reply.save()
                like.delete()
                return Response({"Success": "DisLiked"}, status=status.HTTP_200_OK)
            else:
                if comment:
                    comment.likes += 1
                    comment.save()
                else:
                    reply.likes += 1
                    reply.save()
                return Response({"Success": "Liked"}, status=status.HTTP_201_CREATED)
        except:
            return Response(
                {"Error": "Something went wrong while deleting"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class Bookmark(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            bookmarks = get_list_or_404(models.Bookmark, bookmark_user=user)
            serializer = BookmarkSerializer(bookmarks, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def post(self, request, pk):
        try:
            post = get_object_or_404(models.Post, post_id=pk)
            user = request.user
            if models.BookmarkPost.objects.filter(
                bookmark_user=user, post=post
            ).exists():
                return Response(
                    {"Error": "Already Bookmarked"}, status=status.HTTP_400_BAD_REQUEST
                )
            bookmarks = models.BookmarkPost.objects.create(
                bookmark_user=user, post=post
            )
            bookmarks.save()
            return Response(
                {"Success": "Successfully bookmarked"}, status=status.HTTP_201_CREATED
            )
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def delete(self, request, pk):
        try:
            post = get_object_or_404(models.Post, post_id=pk)
            user = request.user
            bookmarks = get_object_or_404(
                models.BookmarkPost, bookmark_user=user, post=post
            )
            bookmarks.delete()
            return Response({"Success": "Successfully deleted"})
        except Exception as e:
            return Response(
                {"Error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
 
class FollowView(APIView):
    def get(self,request):
        try:
            following=get_list_or_404(models.Follow,follower=request.user)
            serializer=FollowSerializer(following,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error":str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def post(self,request,pk):
        try:
            following=get_object_or_404(models.User,username=pk)
            
            follow=models.Follow.objects.create(following=following,follower=request.user)
            follow.save()
            return Response({"Success":"Followed successfuly"},status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"Error":str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def delete(self,request,pk):
        try:
            following=get_object_or_404(models.User,username=pk)
            Unfollow=models.Follow.objects.filter(following=following)
            Unfollow.delete()
            return Response({"Success":"Unfollowed successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error":str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
