from django.forms import fields
from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'name', 'customerId', 'access', 'age', 'date', 'tcNo', 'customerNo'
        )