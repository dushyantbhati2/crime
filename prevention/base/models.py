from django.db import models
class test(models.Model):
    user=models.CharField(max_length=100)

    def __str__(self):
        return self.user

class test2(models.Model):
    user=models.CharField(max_length=100)

    def __str__(self):
        return self.user 
