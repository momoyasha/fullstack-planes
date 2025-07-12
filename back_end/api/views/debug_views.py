from api.repository.plane_repository import PlaneRepository
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.business.plane_business import PlaneBusiness
from rest_framework.permissions import AllowAny

class DebugView(APIView):
    """
    View para chamar lógica em desenvolvimento.
    Útil para debugging.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        # plane = PlaneRepository.get_plane_by_id(id=1)
        method_to_debug = PlaneBusiness.advance_plane_randomly(plane_id=1)
        return Response({"status": True }, status=status.HTTP_200_OK)