from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import User
from uuid import uuid4
# Create your models here.

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile')
    gender=models.CharField(max_length=100)
    occupation=models.CharField(max_length=100,blank=True)
    
    def __str__(self):
        return self.user.username
    
class Post(models.Model): 
    post_user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='post_user')
    description=models.TextField(blank=True)
    post_id=models.UUIDField(default=uuid4,primary_key=True)
    likes=models.IntegerField(default=0)
    # file=models.FileField(upload_to='Posts',null=True,blank=True) 
    def __str__(self):
        return self.post_user.username
    
class PostFile(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE, related_name='files')
    file=models.FileField(upload_to='Posts',null=True,blank=True) 

class Comments(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='comment_user')
    id = models.UUIDField(default=uuid4, primary_key=True)
    content = models.TextField(blank=True) 
    files = models.FileField(upload_to='comments_files', blank=True, null=True) 
    def __str__(self):
        return self.comment_user.username
class LikesPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    like_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.like_user.username

class BookmarkPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    bookmark_user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='bookmark_user')
    def __str__(self):
        return self.bookmark_user.username

class Community(models.Model):
    com_user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='com_user')
    com_id=models.UUIDField(default=uuid4, primary_key=True)
    com_name=models.CharField(max_length=100)
    com_description=models.CharField(max_length=400)
    com_followers=models.IntegerField(default=0)
    com_image=models.ImageField(upload_to="com_images",blank=True)
    def __str__(self):
        return self.com_name

class Camps(models.Model):
    camp_id=models.UUIDField(default=uuid4,primary_key=True)
    camp_name=models.CharField(max_length=100)
    camp_type=models.CharField(max_length=20)
    date=models.DateField()
    description=models.CharField(max_length=1000)
    created_by=models.ForeignKey(User,on_delete=models.CASCADE)
    location  = models.CharField(max_length=200)
    meet_link=models.URLField(blank=True)
    camp_theme=models.CharField(max_length=20)
    no_of_registered_user=models.IntegerField(default=0)
    status=models.BooleanField(default=False) 
    
    def __str__(self):
        return self.camp_name

class Camp_user(models.Model):
    camp=models.ForeignKey(Camps,on_delete=models.CASCADE)
    registered_user=models.ForeignKey(User,on_delete=models.CASCADE)
    feedback = models.TextField(blank=True)
    
    def __str__(self):
        return self.registered_user.username
class Camp_files(models.Model):
    camp = models.ForeignKey(Camps,on_delete=models.CASCADE)
    camp_files = models.FileField(upload_to='camp_files')
    
    def __str__(self):
        return self.camp.camp_name
    
    