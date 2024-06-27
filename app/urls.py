from django.urls import include, path
from app import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('tasks', views.TaskViewSet)

urlpatterns = router.urls
