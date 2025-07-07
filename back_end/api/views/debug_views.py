from api.repository.plane_repository import PlaneRepository
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class DebugView(APIView):
    """
    View para chamar lógica em desenvolvimento.
    Útil para debugging.
    """
    def get(self, request):
        method_to_debug = PlaneRepository.create_plane(model="test bi-plane",
                                                        serial_number="AX-123")
        return Response({"status": True }, status=status.HTTP_200_OK)