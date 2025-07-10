import { useEffect, useState } from "react";
import { useGetPlanes } from "./useGetPlanes";

const usePeriodicallyGetPlanes = ({ ms_interval }) => {
  const { planes, fetchPlanes } = useGetPlanes();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Renderização n.${count}`);
    setCount((prev) => prev + 1);

    const intervalId = setInterval(() => {
      fetchPlanes();
    }, ms_interval);

    return () => clearInterval(intervalId);
  }, []);

  return { planes };
};
export default usePeriodicallyGetPlanes;
