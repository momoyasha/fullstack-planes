export const BASE_URL = import.meta.env.VITE_API_URL;

export const REFRESH_URL = `${BASE_URL}${
  import.meta.env.VITE_REFRESH_ENDPOINT
}`;
