const url = "http://127.0.0.1:8000/api/token/";

const fetchTokens = async ({ username, password }) => {
  try {
    const body = JSON.stringify({
      username: username,
      password: password,
    });

    const response = await fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: body,
    });

    if (!response.ok) {
      throw new Error(
        `Erro de login: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export default fetchTokens;
