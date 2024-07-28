from datetime import datetime
from uuid import uuid4

from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Post(models.Model):
    post_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="post_user"
    )
    description = models.TextField()
    post_id = models.UUIDField(default=uuid4, primary_key=True)
    likes = models.IntegerField(default=0)
    upload_time = models.DateTimeField(default=datetime.now)

    # file=models.FileField(upload_to='Posts',null=True,blank=True)
    def __str__(self):
        return self.post_user.username

    class Meta:
        ordering = ["-upload_time"]
 

class PostFile(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="files")
    file = models.FileField(upload_to="Posts", null=True, blank=True)


class Comments(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="comment_user"
    )
    id = models.UUIDField(default=uuid4, primary_key=True)
    content = models.TextField(blank=True)
    files = models.FileField(upload_to="comments_files", blank=True, null=True)
    upload_time = models.DateTimeField(default=datetime.now())
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.comment_user.username

    class Meta:
        ordering = ["-upload_time"]


class Reply(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    comment = models.ForeignKey(Comments, on_delete=models.CASCADE)
    reply_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="reply_user"
    )
    content = models.TextField()
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.reply_user.username


class CommentAndReplyLike(models.Model):
    comment = models.ForeignKey(
        Comments, on_delete=models.CASCADE, null=True, blank=True
    )
    Reply = models.ForeignKey(Reply, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class LikesPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="post")
    like_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="like_user"
    )

    def __str__(self):
        return self.like_user.username


class BookmarkPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    bookmark_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="bookmark_user"
    )

    def __str__(self):
        return self.bookmark_user.username


class Community(models.Model):
    com_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="com_user"
    )
    com_id = models.UUIDField(default=uuid4, primary_key=True)
    com_name = models.CharField(max_length=100)
    com_description = models.CharField(max_length=400)
    com_followers = models.IntegerField(default=0)
    com_image = models.ImageField(upload_to="com_images", blank=True)

    def __str__(self):
        return self.com_name

class Follow(models.Model):
    following=models.ForeignKey(User,on_delete=models.CASCADE,related_name="following")
    follower=models.ForeignKey(User,on_delete=models.CASCADE,related_name="follower")

    def __str__(self):
        return self.following.username 