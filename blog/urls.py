from rest_framework import routers

from .api import PostViewSet


router = routers.DefaultRouter()
router.register('/posts', PostViewSet)


urlpatterns = router.urls
