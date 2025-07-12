// guarda tokens de acesso e autenticação

import { useRef, useState } from "react";
import { createContext } from "react";

import { setTokens, clearTokens } from "../services/handleTokensInStorage";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = ({ newAccessToken, newRefreshToken }) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    setTokens(newAccessToken, newRefreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);

    clearTokens();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        accessToken,
        refreshToken,
        login,
        logout,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
