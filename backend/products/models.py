from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True, null=False, default="All cool stuffs")
    price = models.DecimalField(max_digits=10, decimal_places=2)