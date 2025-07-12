from pyproj import Geod
import math

class ProjectionUtils():
    """
    Classe de métodos básicos de cálculos envolvendo o globo ou plano.
    """
    geod = Geod(ellps='WGS84')

    @staticmethod
    def get_bearing_globe(lat_orig, lon_orig, lat_dest, lon_dest):
        """
        Dadas coordenadas de origem e destino, devolve a
        direção em graus definida pelos pontos.
        """

        azimuth,_, _ = ProjectionUtils.geod.inv(lons1=lon_orig, lats1=lat_orig,
                                                lons2=lon_dest, lats2=lat_dest)

        return azimuth % 360
    
    import math

    @staticmethod
    def get_bearing_plane(lat_orig, lon_orig, lat_dest, lon_dest):
        delta_x = lon_dest - lon_orig
        delta_y = lat_dest - lat_orig
        angle_rad = math.atan2(delta_x, delta_y)
        angle_deg = (math.degrees(angle_rad) + 360) % 360
        return angle_deg