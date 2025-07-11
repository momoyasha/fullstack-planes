import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("ey", username, password);
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
