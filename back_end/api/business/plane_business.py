from geopy import Point
from geopy.distance import distance as gp_dist
from api.models.plane import Plane
from api.utils.common_utils import CommonUtils
from api.utils.projection_utils import ProjectionUtils
from api.repository.plane_repository import PlaneRepository
from typing import Optional
import logging

logger = logging.getLogger(__name__)


class PlaneBusiness():
    """
    Classe de funções para interagir com objetos ou
    atributos de Planes.
    """

    @staticmethod
    def get_new_plane_position_random(plane_obj: Plane):
        """
        Avança o avião para uma direção aleatória (mas ainda na frente).
        Retorna a nova posição (Point) e a nova direção.
        """
        current_direction = plane_obj.direction
        current_position = Point(latitude=plane_obj.latitude,
                                 longitude=plane_obj.longitude)

        # em graus
        direction_to_fly_to = (CommonUtils.get_random_number_between((current_direction),
                                                               (current_direction+45)) % 360)
        
        # em km
        distance_to_travel = CommonUtils.get_random_number_between(2000, 5000)

        destination_point = (gp_dist(kilometers=distance_to_travel)
                             .destination(point=current_position, bearing=direction_to_fly_to))
        
        new_bearing = ProjectionUtils.get_bearing_plane(lat_orig=plane_obj.latitude,
                                                        lon_orig=plane_obj.longitude,
                                                        lat_dest=destination_point.latitude,
                                                        lon_dest=destination_point.longitude)
        
        return destination_point.latitude, destination_point.longitude, new_bearing
    
    @staticmethod
    def advance_plane_randomly(plane_id:Optional[int] = None, plane_obj:Optional[Plane]=None):
        """
        Dado um id de avião, realiza um avanço aleatório.
        """
        if not plane_id and not plane_obj:
            return

        if not plane_obj:
            plane_obj = PlaneRepository.get_plane_by_id(id=plane_id)

        new_lat, new_long, new_direction = PlaneBusiness.get_new_plane_position_random(plane_obj=plane_obj)

        plane_obj.latitude = new_lat
        plane_obj.longitude = new_long
        plane_obj.direction = new_direction

        plane_obj = PlaneRepository.update_plane(plane_obj=plane_obj)

        if plane_obj:
            logger.info(f"Posição de avião id {plane_obj.id} atualizada para ({plane_obj.latitude}, {plane_obj.longitude})")
