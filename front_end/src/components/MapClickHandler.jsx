// me arrependendo levemente de ter insistido no react-leaflet...
import { useMapEvent } from "react-leaflet";

const MapClickHandler = ({ onMapClick }) => {
  useMapEvent("click", () => {
    onMapClick();
  });

  return null;
};

export default MapClickHandler;
