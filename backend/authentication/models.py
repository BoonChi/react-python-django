from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from datetime import timedelta, date
from django.utils import timezone, dateformat
    
class UserManager(BaseUserManager):

  def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
    now = timezone.now()
    email = self.normalize_email(email)
    user = self.model(email=email,
             is_staff=is_staff, is_active=False,
             is_superuser=is_superuser, last_login=now,
             date_joined=now, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_user(self, email=None, password=None, **extra_fields):
    return self._create_user(email, password, False, False,
                 **extra_fields)

  def create_superuser(self, email, password, **extra_fields):
    user=self._create_user(email, password, True, True,
                 **extra_fields)
    user.is_active=True
    user.save(using=self._db)
    return user

class User(AbstractUser):
    """
    This is my documentation fopr user
    """
    username = None
    mobile_number = models.CharField(max_length=10, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    email = models.EmailField(blank=False, null=False, unique=True, db_index=True)
    
    
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['mobile_number']
    
   
    def __str__(self):
        return self.email
    