from django.db import models
from django.db.models.base import Model
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model):
    name = models.CharField(max_length=100)
    customerId = models.CharField(max_length=100, default="")
    access = models.CharField(max_length=100, default="")
    age = models.CharField(max_length=100, default="")
    date = models.CharField(max_length=100, default="")
    tcNo = models.CharField(max_length=100, default="")
    customerNo = models.CharField(max_length=100, default="")

    
    

def __str__(self):
    return self.title
