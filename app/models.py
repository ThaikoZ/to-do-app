import datetime
from django.db import models
from django.conf import settings


class Task(models.Model):
  STATUS_CHOICES = [
        ('DONE', "Done"),
        ('TODO', 'To Do')
    ]
  
  title = models.CharField(max_length=255)
  description = models.CharField(max_length=255)
  status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='TODO')
  is_flagged = models.BooleanField(default=False)
  deadline_date = models.DateTimeField(null=True, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  