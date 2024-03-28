from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    gender=models.CharField(max_length=15)
    occupation=models.CharField(max_length=20)
    
    def __str__(self):
        return self.user.username
    
