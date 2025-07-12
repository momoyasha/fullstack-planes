import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./components/AppRouter.jsx";

// contextos
import { PlanesContextProvider } from "./context/PlanesContext.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { AuthenticationContextProvider } from "./context/AuthenticationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <PlanesContextProvider>
        <AppRouter />
      </PlanesContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>
);
