import { REFRESH_URL } from "../config";
import { getTokens, setTokens } from "./handleTokensInStorage";

const getWithAuth = async ({ url, options = {} }) => {
  try {
    const { accessToken, refreshToken } = getTokens();

    let headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    let fetchOptions = { ...options, headers: headers, method: "GET" };

    let response = await fetch(url, fetchOptions);

    //   trata especificamente o "Unauthorized"
    if (!response.ok && response.status === 401) {
      const refreshHeaders = { "Content-Type": "application/json" };
      const refreshBody = JSON.stringify({ refresh: refreshToken });

      const refreshOptions = {
        method: "POST",
        headers: refreshHeaders,
        body: refreshBody,
      };

      const refreshResponse = await fetch(REFRESH_URL, refreshOptions);

      if (!refreshResponse.ok) {
        throw new Error(
          `Erro ao buscar dados: ${refreshResponse.status} - ${refreshResponse.statusText}`
        );
      } else {
        const newAccessTokenJson = await refreshResponse.json();

        setTokens({
          newAccessToken: newAccessTokenJson.access,
          newRefreshToken: refreshToken,
        });

        headers = {
          ...headers,
          Authorization: `Bearer ${newAccessTokenJson.access}`,
        };

        fetchOptions = { ...fetchOptions, headers };

        response = await fetch(url, fetchOptions);
      }
    }

    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export default getWithAuth;
