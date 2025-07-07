from api.repository.plane_repository import PlaneRepository
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers.plane_serializer import PlaneSerializer
from rest_framework.viewsets import ViewSet

# class PlaneByIdView(APIView):
#     """
#     Retorna dados de um avião por id
#     """
#     def get(self, request, id):
#         plane = PlaneRepository.get_plane_by_id(id=id)
#         return Response(PlaneSerializer(plane).data, status=status.HTTP_200_OK)
    
class PlaneViewSet(ViewSet):
    """
    Viewset de aviões. Só aceita GET.
    """
    http_method_names = ["get"]

    def list(self, request):
        plane = PlaneRepository.get_all_planes()
        return Response(PlaneSerializer(plane, many=True).data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        plane = PlaneRepository.get_plane_by_id(id=pk)
        return Response(PlaneSerializer(plane).data, status=status.HTTP_200_OK)