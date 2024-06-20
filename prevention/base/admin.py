from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Profile)
admin.site.register(models.Post)
admin.site.register(models.Comments)
admin.site.register(models.PostFile)
admin.site.register(models.LikesPost)
admin.site.register(models.BookmarkPost)
admin.site.register(models.Community)
admin.site.register(models.Camps)
admin.site.register(models.Camp_user)
admin.site.register(models.Camp_files)
