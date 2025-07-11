import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import ExtendedMarker from "./ExtendedMarker";
import { useGetPlanes } from "../hooks/useGetPlanes";
import PlanesOnTheMap from "./PlanesOnTheMap";

const Map = () => {
  // define o canto sudoeste e o canto noroeste do mapa
  const southWest = [-90, -180];
  const northEast = [90, 180];
  const bounds = [southWest, northEast];

  // const { planes } = useGetPlanes();

  return (
    <div id="map">
      <MapContainer
        center={[0, 0]}
        zoom={2.5}
        scrollWheelZoom="center"
        minZoom={2.45}
        maxBounds={bounds}
        maxBoundsViscosity={1}
      >
        <TileLayer
          attribution='<a href="https://www.arcgis.com/home/item.html?id=a284a9b99b3446a3910d4144a50990f6">Sources: Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS User Community</a>'
          url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[0, -180]} />
        <Marker position={[0, 180]} />
        <ExtendedMarker
          position={[-23.0, -46.0]}
          color={"green"}
          planeId={23}
        />
        <ExtendedMarker position={[51, 0]} color={"red"} planeId={35} />
        <PlanesOnTheMap />
      </MapContainer>
    </div>
  );
};
export default Map;
