from api.models.plane import Plane

class Planerepository():
    """
    Funções para interagir com objetos Plane na base de dados.
    """

    @staticmethod
    def create_plane(model: str):
        """
        Cria um objeto Plane na base de dados com o modelo fornecido.
        """

        new_plane = Plane(model=model)
        new_plane.save()

        return new_plane
    