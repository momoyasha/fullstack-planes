"""
Métodos para avançar aviões de várias formas.
"""

from api.business.plane_business import PlaneBusiness
from api.repository.plane_repository import PlaneRepository

    

def advance_all_planes_randomly():
    """
    Avança aleatoriamente todos os aviões na base de dados.
    """
    all_planes = PlaneRepository.get_all_planes()

    for plane in all_planes:
        PlaneBusiness.advance_plane_randomly(plane_obj=plane)