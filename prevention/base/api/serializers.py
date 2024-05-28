from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework  import serializers
from base import models
from ..models import Profile
class userSerializers(ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email','password']
        extra_kwargs={'password':{'write_only':True}}

    
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user    

class ProfileSerializer(ModelSerializer):
    class Meta:
        model  = Profile
        fields='__all__'

class PostFileSerializer(ModelSerializer):
    class Meta:
        model=models.PostFile
        fields=('file',)

class PostSerializer(ModelSerializer):
    files=PostFileSerializer(many=True)
    class Meta:
        model=models.Post
        fields=('post_user', 'description', 'post_id', 'likes', 'files')

class CommentSerializer(ModelSerializer):
    class Meta:
        model=models.Comments
        fields='__all__'