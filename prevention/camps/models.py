from uuid import uuid4

from django.contrib.auth.models import User

# Create your models here.
from django.db import models
from django.utils import timezone

# Create your models here.


class Camps(models.Model):
    camp_id=models.UUIDField(default=uuid4,primary_key=True)
    camp_name=models.CharField(max_length=100)
    camp_type=models.CharField(max_length=20)
    description=models.CharField(max_length=1000)
    created_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name="created_by")
    date=models.DateField(default=timezone.now)
    location= models.CharField(max_length=200)
    meet_link=models.URLField(blank=True)
    camp_theme=models.CharField(max_length=20)
    no_of_registered_user=models.IntegerField(default=0)
    status=models.BooleanField(default=False) 
    # created_at = models.DateTimeField(default=datetime.now())
        
    def _str_(self):
        return self.camp_name

class Camp_user(models.Model):
    camp=models.ForeignKey(Camps,on_delete=models.CASCADE)
    registered_user=models.ForeignKey(User,on_delete=models.CASCADE)
    feedback = models.TextField(blank=True)
    
    def _str_(self):
        return self.registered_user.username

class Camp_files(models.Model):
    camp = models.ForeignKey(Camps,on_delete=models.CASCADE,related_name="files")
    camp_files = models.FileField(upload_to='camps')
    
    def _str_(self):
        return self.camp.camp_name