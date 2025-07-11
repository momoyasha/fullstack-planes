import { useRef, useEffect } from "react";

export const useLogin = () => {
  useEffect(() => {
    // fetchTokens();
  }, []);

  return { fetchTokens };
};
