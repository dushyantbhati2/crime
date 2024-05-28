from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import User
from uuid import uuid4


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    gender=models.CharField(max_length=100)
    occupation=models.CharField(max_length=100,blank=True)
    
    def __str__(self):
        return self.user.username
    
class Post(models.Model):
    post_user=models.ForeignKey(User,on_delete=models.CASCADE)
    description=models.TextField(blank=True)
    post_id=models.UUIDField(default=uuid4,primary_key=True)
    likes=models.IntegerField(default=0)

    def __str__(self):
        return self.post_user.username
    
class PostFile(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE, related_name='files')
    file=models.FileField(upload_to='Posts',null=True,blank=True) 


class Comments(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    comment_user=models.ForeignKey(User,on_delete=models.CASCADE)
    id=models.UUIDField(default=uuid4,primary_key=True)
    content=models.TextField(blank=True)
    files=models.FileField(upload_to='Comments')

    def __str__(self):
        return self.comment_user.username


