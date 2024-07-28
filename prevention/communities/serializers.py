from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from user.serializers import userSerializers

from . import models


class PostFileSerializer(ModelSerializer):

    class Meta:
        model = models.PostFile
        fields = ("file",)

class PostSerializer(ModelSerializer):
    post_user = userSerializers(read_only=True)
    files = PostFileSerializer(many=True)
    liked = serializers.SerializerMethodField()
    bookmark = serializers.SerializerMethodField()

    class Meta:
        model = models.Post
        fields = (
            "description",
            "post_id",
            "likes",
            "files",
            "post_user",
            "upload_time",
            "liked", 
            "bookmark",
        )

    def get_liked(self, obj):
        request = self.context.get("request", None)
        if request and request.user.is_authenticated:
            return models.LikesPost.objects.filter(
                post=obj, like_user=request.user
            ).exists()
        return False

    def get_bookmark(self, obj):
        request = self.context.get("request", None)
        if request and request.user.is_authenticated:
            return models.BookmarkPost.objects.filter(
                post=obj, bookmark_user=request.user
            ).exists()
        return False

    def create(self, validated_data):
        files_data = validated_data.pop("files")
        post_user = self.context["request"].user
        post = models.Post.objects.create(post_user=post_user, **validated_data)
        for file_data in files_data:
            models.PostFile.objects.create(post=post, **file_data)
        return post


class CommentSerializer(serializers.ModelSerializer):
    comment_user = userSerializers(read_only=True)
    liked = serializers.SerializerMethodField()

    class Meta:
        model = models.Comments
        fields = ("id", "comment_user", "content", "files", "likes", "liked")
 
    def get_liked(self, obj):
        user = self.context["request"].user
        return models.CommentAndReplyLike.objects.filter(
            comment=obj, user=user
        ).exists()

    def create(self, validated_data):
        comment_user = self.context["request"].user
        post = self.context["post"]
        return models.Comments.objects.create(
            comment_user=comment_user, post=post, **validated_data
        )


class BookmarkSerializer(ModelSerializer):
    bookmark_user = userSerializers(read_only=True)

    class Meta:
        model = models.BookmarkPost
        fields = "__all__"
        extra_field = "bookmark_user"


class CommunitySerializer(ModelSerializer):
    com_user = userSerializers()

    class Meta:
        model = models.Community
        fields = "__all__"
        extra_field = "com_user"

    def validate_com_name(self, value):
        if models.Community.objects.filter(com_name=value).exists():
            raise serializers.ValidationError("Community name already exists.")
        return value


class ReplySerializer(ModelSerializer):
    reply_user = userSerializers(read_only=True)

    class Meta:
        model = models.Reply
        fields = "__all__" 
        extra_field = "reply_user"
 
    def create(self, validated_data):
        reply_user = self.context["request"].user
        comment = self.context["comment"]
        return models.Reply.objects.create(
            reply_user=reply_user, comment=comment, **validated_data
        )

class FollowSerializer(ModelSerializer):
    follower=userSerializers()
    following=userSerializers()
    class Meta:
        model=models.Follow
        fields=["follower","following"]