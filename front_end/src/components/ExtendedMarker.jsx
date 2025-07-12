// Usa o Marker base do react-leaflet e aplica algumas customizações
import { useMap } from "react-leaflet";
// Marker especial com slideTo para atualizar posição
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import L from "leaflet";
import "./ExtendedMarker.css";
import "leaflet-rotatedmarker";
import { useContext, useEffect, useRef } from "react";
import { PlanesContext } from "../context/PlanesContext";

const ExtendedMarker = ({ planeId, position, color, rotation }) => {
  const map = useMap();
  const { selectedPlaneId, setSelectedPlaneId } = useContext(PlanesContext);

  const planeIsSelected = planeId === selectedPlaneId;

  const thisMarkerRef = useRef();

  const ColoredPlane = L.divIcon({
    className: `type-1 ${planeIsSelected ? "selected" : ""}`,
    html: `<img src="/airplane_${color}.svg"
     class="plane-icon">`,
    // centraliza o referencial de posicionamento do marker
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  const handleClick = (e) => {
    map.setView(position, map.getZoom());
    setSelectedPlaneId(planeId);
  };

  // roda o marker na marra, já que aparentemente o leaflet-rotatedmarker não faz
  useEffect(() => {
    if (thisMarkerRef.current) {
      thisMarkerRef.current.setRotationAngle(rotation);
    }
  }, [rotation]);

  if (position) {
    return (
      <ReactLeafletDriftMarker
        ref={thisMarkerRef}
        position={position}
        icon={ColoredPlane}
        duration={1000}
        rotationAngle={rotation ? rotation : 0}
        eventHandlers={{ click: handleClick }}
      />
    );
  }
};
export default ExtendedMarker;
