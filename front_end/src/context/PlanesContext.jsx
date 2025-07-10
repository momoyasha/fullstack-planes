// mantém a lista de aviões (para, por exemplo,
// ser plotada no mapa) em contexto

import { useState } from "react";
import { createContext } from "react";

export const PlanesContext = createContext();

export const PlanesContextProvider = ({ children }) => {
  const [planes, setPlanes] = useState(null);

  return (
    <PlanesContext.Provider value={{ planes, setPlanes }}>
      {children}
    </PlanesContext.Provider>
  );
};
