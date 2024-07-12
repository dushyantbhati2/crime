from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework  import serializers
from authentication.serializers import userSerializers
from .models import Profile

class ProfileSerializer(ModelSerializer):
    class Meta:
        model  = Profile
        fields='__all__'