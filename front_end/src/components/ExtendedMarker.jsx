// Usa o Marker base do react-leaflet e aplica algumas customizações
import { Marker } from "react-leaflet";
import L from "leaflet";
import "./ExtendedMarker.css";

const ExtendedMarker = ({ position, color }) => {
  const ColoredPlane = L.divIcon({
    className: "type-1",
    html: `<img src="/airplane_${color}.svg" id="plane-icon">`,
  });

  if (position) {
    return <Marker position={position} icon={ColoredPlane} />;
  }
};
export default ExtendedMarker;
