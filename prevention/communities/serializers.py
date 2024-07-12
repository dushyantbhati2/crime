from rest_framework.serializers import ModelSerializer
from rest_framework  import serializers
from . import models 
from authentication.serializers import userSerializers

class PostFileSerializer(ModelSerializer):
    class Meta:
        model=models.PostFile
        fields=('file',)

class PostSerializer(ModelSerializer):
    post_user = userSerializers()
    files=PostFileSerializer(many=True)
    liked=serializers.SerializerMethodField()
    bookmark=serializers.SerializerMethodField()
    class Meta:
        model=models.Post
        fields=('description','post_id','likes','files','post_user','upload_time','liked','bookmark')

    def get_liked(self,obj):
        request = self.context.get('request', None)
        if request and request.user.is_authenticated:
            return models.LikesPost.objects.filter(post=obj,like_user=request.user).exists()
        return False
    def get_bookmark(self,obj):
        request=self.context.get('request',None)
        print(obj)
        if request and request.user.is_authenticated:
            return models.BookmarkPost.objects.filter(post=obj,bookmark_user=request.user).exists()
        return False

class CommentSerializer(serializers.ModelSerializer):
    comment_user = userSerializers()
    class Meta:
        model = models.Comments
        fields = ('id', 'comment_user', 'content', 'files')

class BookmarkSerializer(ModelSerializer):
    bookmark_user=userSerializers()
    class Meta:
        model=models.BookmarkPost
        fields='__all__'
        extra_field='bookmark_user'

class CommunitySerializer(ModelSerializer):
    com_user=userSerializers()
    class Meta:
        model=models.Community
        fields='__all__'
        extra_field='com_user'

class ReplySerializer(ModelSerializer):
    reply_user = userSerializers()
    class Meta:
        model = models.Reply
        fields='__all__'
        extra_field='reply_user'