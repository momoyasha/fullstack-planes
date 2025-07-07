from api.models.plane import Plane
from api.utils.common_utils import CommonUtils
import logging

logger = logging.getLogger(__name__)

class PlaneRepository():
    """
    Funções para interagir com objetos Plane na base de dados.
    """

    @staticmethod
    def create_plane(model: str, serial_number:str):
        """
        Cria um objeto Plane na base de dados com o modelo fornecido.
        """
        new_plane = None
        error_message = ""

        if model and serial_number:
            new_plane = Plane(model=model, serial_number=serial_number)
            try:
                new_plane.save()
            except Exception:
                raise
        else:
            if not model and not serial_number:
                error_message = "Modelo e número de série devem ser fornecidos"
            elif not model:
                error_message = "Modelo deve ser fornecido"
            elif not serial_number:
                error_message = "Número de série deve ser fornecido"

            raise ValueError(error_message)

        return new_plane
    
    def get_plane_by_id(id:int):
        """
        Traz um avião da base de dados dado o seu id.
        """
        try:
            plane = Plane.objects.get(id=id)
        except Exception as ex:
            plane = None
            logger.info(f'Nenhum avião encontrado com id {id}.')

        return plane 
    
    @staticmethod
    def get_all_planes():
        """
        Retorna todos os aviões registrados na base de dados.
        """
        try:
            planes = list(Plane.objects.all())
        except Exception:
            planes = []
            logger.info(f'Nenhum avião encontrado.')

        return planes

    

