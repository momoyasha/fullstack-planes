import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// contextos
import { PlanesContextProvider } from "./context/PlanesContext.jsx";
import LoginPage from "./components/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlanesContextProvider>
      <RouterProvider router={router} />
    </PlanesContextProvider>
  </StrictMode>
);
