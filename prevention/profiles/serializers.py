from communities.models import Post
from communities.serializers import PostSerializer
from rest_framework import serializers
from user.serializers import userSerializers

from .models import Profile


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
        user_posts = Post.objects.select_related("post_user").filter(post_user=obj.user)
        return PostSerializer(user_posts, many=True).data
