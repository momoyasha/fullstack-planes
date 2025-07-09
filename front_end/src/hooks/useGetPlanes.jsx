import { useState, useEffect } from "react";

export const useGetPlanes = () => {
  const url = "http://127.0.0.1:8000/api/planes/";

  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch(url, {
          headers: { Accept: "application/json" },
        });
        const json = await response.json();
        console.log(json);
        setPlanes(json);
      } catch (error) {
        throw new Error(`Erro ao buscar aviões em ${url}: ${error}`);
      }
    };

    fetchPlanes();
  }, []);

  return { planes };
};
