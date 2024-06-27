from rest_framework import serializers
from app.models import Task

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = ['id', 'status', 'title', 'description', 'is_flagged', 'deadline_date']

class CreateTaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = ['id', 'status', 'title', 'description', 'is_flagged', 'deadline_date']
    read_only_fields = ['user']
  
  