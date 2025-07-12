import { useState, useEffect } from "react";
import { useContext } from "react";
import { PlanesContext } from "../context/PlanesContext";
import getWithAuth from "../services/getWithAuth";

export const useGetPlanes = () => {
  const url = "http://127.0.0.1:8000/api/planes/";

  const { planes, setPlanes } = useContext(PlanesContext);

  const fetchPlanes = async () => {
    try {
      const json = await getWithAuth({ url });

      if (Array.isArray(json)) {
        setPlanes(json);
      } else {
        console.log("Resposta inesperada em fetchPlanes:", json);
      }
    } catch (error) {
      throw new Error(`Erro ao buscar aviões em ${url}: ${error}`);
    }
  };

  useEffect(() => {
    fetchPlanes();
  }, []);

  return { planes, setPlanes, fetchPlanes };
};
