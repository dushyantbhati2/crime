from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Profile)
admin.site.register(models.Post)
admin.site.register(models.Comments)
admin.site.register(models.PostFile)
<<<<<<< HEAD
=======
admin.site.register(models.LikesPost)
admin.site.register(models.BookmarkPost)
admin.site.register(models.Community)

>>>>>>> 47ca22573a8466e92a62505103fc2af9b18a89a3
