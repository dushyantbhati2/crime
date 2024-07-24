from django.contrib import admin

from . import models

# Register your models here.
admin.site.register(models.Camp_user)
admin.site.register(models.Camps)
admin.site.register(models.Camp_files)
