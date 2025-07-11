// guarda tokens de acesso e autenticação

import { useRef } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const accessToken = useRef(null);
  const refreshToken = useRef(null);
  const name = useRef(null);

  return (
    <AuthenticationContext.Provider value={{ accessToken, refreshToken, name }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
