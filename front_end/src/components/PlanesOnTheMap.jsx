// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useGetPlanes } from "../hooks/useGetPlanes";
import ExtendedMarker from "./ExtendedMarker";
import usePeriodicallyGetPlanes from "../hooks/usePeriodicallyGetPlanes";

const PlanesOnTheMap = () => {
  const { planes } = usePeriodicallyGetPlanes({ ms_interval: 5000 });

  return (
    <div id="PlanesOnTheMap">
      {planes &&
        planes.map((plane) => (
          <ExtendedMarker
            position={[plane.latitude, plane.longitude]}
            color={"blue"}
            key={plane.id}
          />
        ))}
    </div>
  );
};
export default PlanesOnTheMap;
