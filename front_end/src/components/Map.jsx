import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import ExtendedMarker from "./ExtendedMarker";

const Map = () => {
  // define o canto sudoeste e o canto noroeste do mapa
  const southWest = [-90, -180];
  const northEast = [90, 180];
  const bounds = [southWest, northEast];

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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[0, -180]} />
        <Marker position={[0, 180]} />
        <ExtendedMarker position={[-23.0, -46.0]} color={"green"} />
        <ExtendedMarker position={[51, 0]} color={"red"} />
      </MapContainer>
    </div>
  );
};
export default Map;
