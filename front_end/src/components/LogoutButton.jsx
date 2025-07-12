import "./LogoutButton.css";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthenticationContext);

  const performLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <button type="button" id="logout_button" onClick={performLogout}>
      Logout
    </button>
  );
};
export default LogoutButton;
