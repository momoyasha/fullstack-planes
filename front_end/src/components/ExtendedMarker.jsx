// Usa o Marker base do react-leaflet e aplica algumas customizações
import { Marker } from "react-leaflet";
// Marker especial com slideTo para atualizar posição
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import L from "leaflet";
import "./ExtendedMarker.css";
import "leaflet-rotatedmarker";

const ExtendedMarker = ({ position, color, rotation }) => {
  const ColoredPlane = L.divIcon({
    className: "type-1",
    html: `<img src="/airplane_${color}.svg" id="plane-icon">`,
    // centraliza o referencial de posicionamento do marker
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  if (position) {
    // return <Marker position={position} icon={ColoredPlane} />;
    return (
      <ReactLeafletDriftMarker
        position={position}
        icon={ColoredPlane}
        duration={1000}
        rotationAngle={rotation ? rotation : 0}
      />
    );
  }
};
export default ExtendedMarker;
