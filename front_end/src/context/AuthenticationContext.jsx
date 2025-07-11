// guarda tokens de acesso e autenticação

import { useRef, useState } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const login = ({ newAccessToken, newRefreshToken }) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthenticationContext.Provider
      value={{ accessToken, refreshToken, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
