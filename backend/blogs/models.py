from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True, null=False, default="Write your articles today")
    dateTime = models.DateTimeField(auto_now=True)