# api/urls.py (crie esse arquivo se ainda não tiver)
from rest_framework.routers import DefaultRouter
from api.views.plane_views import PlaneViewSet

router = DefaultRouter()
router.register(r'planes', PlaneViewSet, basename='plane')

urlpatterns = router.urls