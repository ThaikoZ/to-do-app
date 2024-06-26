from .pagination import DefaultPagination
from .serializers import TaskSerializer 
from .models import Task 
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend 
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
from rest_framework.decorators import action
from rest_framework.response import Response

class TaskViewSet(ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  pagination_class = DefaultPagination
  filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
  filterset_fields = ['is_flagged']
  search_fields = ['title', 'description']
  ordering_fields = ['deadline_date']
  
  
  @action(detail=False)
  def me(self, request):
    return Response("ok")