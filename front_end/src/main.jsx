import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// contextos
import { PlanesContextProvider } from "./context/PlanesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlanesContextProvider>
      <App />
    </PlanesContextProvider>
  </StrictMode>
);
