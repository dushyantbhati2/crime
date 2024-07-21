from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Profile
from communities.models import Post
from django.contrib.auth.models import User
from user.serializers import userSerializers
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "description",
            "post_id",
        )

class ProfileSerializer(serializers.ModelSerializer):
    user = userSerializers()
    posts = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = (
            "user",
            "gender",
            "occupation",
            "posts",
        )

    def get_posts(self, obj):
        user_posts = Post.objects.filter(post_user=obj.user)
        return PostSerializer(user_posts, many=True).data