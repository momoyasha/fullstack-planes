import { useEffect, useState } from "react";
import { useGetPlanes } from "./useGetPlanes";

import { useContext } from "react";
import { PlanesContext } from "../context/PlanesContext";

const usePeriodicallyGetPlanes = ({ ms_interval }) => {
  const { planes } = useContext(PlanesContext);
  const { fetchPlanes } = useGetPlanes();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Renderização n.${count}`);
    setCount((prev) => prev + 1);

    const intervalId = setInterval(() => {
      fetchPlanes();
    }, ms_interval);

    return () => clearInterval(intervalId);
  }, []);

  //   return { planes };
};
export default usePeriodicallyGetPlanes;
