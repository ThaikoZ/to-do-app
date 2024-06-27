from .serializers import TaskSerializer, CreateTaskSerializer 
from .models import Task 
from django.contrib.auth import get_user_model
from .pagination import DefaultPagination
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# User = get_user_model()

class TaskViewSet(ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  pagination_class = DefaultPagination
  filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
  filterset_fields = ['is_flagged']
  search_fields = ['title', 'description']
  ordering_fields = ['deadline_date']
  permission_classes = [IsAuthenticated]
  
  def get_queryset(self):
    user = self.request.user
    return Task.objects.filter(user=user)
  
  def perform_create(self, serializer):
    serializer.save(user=self.request.user)
  
  def create(self, request):
    serializer = CreateTaskSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    # Task.objects.create(serializer.data)
    return Response(serializer.validated_data)
