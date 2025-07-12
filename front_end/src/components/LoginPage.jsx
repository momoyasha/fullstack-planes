import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { useLogin } from "../hooks/useLogin";
import fetchTokens from "../services/login";

import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const tokens = await fetchTokens({
      username: username,
      password: password,
    });

    if (!tokens) {
      // renderizar uma mensagem, um dia
      return;
    }

    login({
      newAccessToken: tokens.access,
      newRefreshToken: tokens.refresh,
    });

    navigate("/app", { replace: true });
  };

  return (
    <form className="login_form" onSubmit={handleLogin}>
      <div className="logo_container">
        {/* <img src="/amaze.png" alt="" /> */}
      </div>

      <label>
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <input type="submit" value="Entrar" id="submit_button" />
    </form>
  );
};
export default LoginPage;
